import React, { useState } from 'react';
import { Box, TextField, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Card } from '@mui/material';

const FormComponentB = () => {
  const [values, setValues] = useState({
    item1: '',
    item2: '',
    item3: '',
    item4: '',
    item5: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value >= 0 && value <= 5) {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  const items = [
    "Muestra buen nivel de expresión oral y escrita de conformidad a su formación académica y profesional.",
    "Demuestra ética y valores, discreción con la información a su cargo y responsabilidad en su quehacer diario.",
    "Su arreglo y presentación personal es impecable, viste uniformes; completos, limpios y en buen estado, (Uniforme de Mayo y de diario).",
    "Demuestra interés en su desempeño y afronta adecuadamente las situaciones de estrés (toma decisiones adecuadas que permiten la resolución de situaciones y conflictos).",
    "Es organizado, demuestra iniciativa y recursividad.",
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        A, ACTITUD PERSONAL (10%) VALOR 0.50
      </Typography>
      <TableContainer component={Paper} sx={{width:'90%'}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ITEMS</TableCell>
              <TableCell>VALOR DE CADA ITEM</TableCell>
              <TableCell>10%</TableCell>
              <TableCell>NOTA</TableCell>
              <TableCell>VALOR ITEM NOTA</TableCell>
              <TableCell>VALOR ITEM NOTA %</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item}</TableCell>
                <TableCell>0.1</TableCell>
                <TableCell>0.10%</TableCell>
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
                <TableCell>{((values[`item${index + 1}`] * 0.1) * 100).toFixed(2)}%</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell  colSpan={4}>TOTAL COMPONENTE A (SUMATORIA DE LOS ITEMS DEL 1 AL 5)</TableCell>
              <TableCell>
                {(Object.values(values).reduce((acc, curr) => acc + (parseFloat(curr) || 0), 0) * 0.1).toFixed(2)}
              </TableCell>
              <TableCell>
                {((Object.values(values).reduce((acc, curr) => acc + (parseFloat(curr) || 0), 0) * 0.1) * 100).toFixed(2)}%
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default FormComponentB;
