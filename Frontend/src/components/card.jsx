import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ActionAreaCard({ image, title, description, link }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <Card  sx={{ padding:0, color:'rebeccapurple',maxWidth:300 , width: 240, }} onClick={handleClick}>
      <CardActionArea  >
        <CardMedia 
          component="img"
          height="160"
          image={image}
          alt={title}
          
        />
        <CardContent sx={{height:180,}}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
