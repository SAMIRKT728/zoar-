import React, { useState } from 'react';
import { Box, TextField, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Card } from '@mui/material';

const FormComponentB = ({ title, nombrecolum, items, percentage }) => {
  const [values, setValues] = useState(
    items.reduce((acc, _, index) => ({ ...acc, [`item${index + 1}`]: '' }), {})
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value >= 0 && value <= 5) {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  return (
    <Box sx={{ padding:0, paddingTop:2,}}>
      <Typography variant="h6" gutterBottom>
        {title} ({percentage}%)
      </Typography>
      <TableContainer  component={Paper} sx={{ width: '100%', margin:0, padding:0}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{nombrecolum}</TableCell>
              <TableCell>VALOR DE CADA ITEM</TableCell>
              <TableCell>{percentage}%</TableCell>
              <TableCell sx={{width:'90px'}}>NOTA </TableCell>
              <TableCell>VALOR ITEM NOTA</TableCell>
              <TableCell>VALOR ITEM NOTA %</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item}</TableCell>
                <TableCell>0.1</TableCell>
                <TableCell>{percentage / 100}%</TableCell>
                <TableCell>
                  <TextField
                    name={`item${index + 1}`}
                    type="number"
                    value={values[`item${index + 1}`]}
                    onChange={handleChange}
                    inputProps={{ min: 0, max: 5 }}
                    variant="outlined"
                    size="small"
                  />
                </TableCell>
                <TableCell>{(values[`item${index + 1}`] * 0.1).toFixed(2)}</TableCell>
                <TableCell>{((values[`item${index + 1}`] * 0.1) * percentage).toFixed(2)}%</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={4}>TOTAL COMPONENTE A (SUMATORIA DE LOS ITEMS DEL 1 AL 5)</TableCell>
              <TableCell>
                {(Object.values(values).reduce((acc, curr) => acc + (parseFloat(curr) || 0), 0) * 0.1).toFixed(2)}
              </TableCell>
              <TableCell>
                {((Object.values(values).reduce((acc, curr) => acc + (parseFloat(curr) || 0), 0) * 0.1) * percentage).toFixed(2)}%
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default FormComponentB;
