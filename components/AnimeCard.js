import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';

export default function AnimeCard({anime}) {
  return (
    <Card sx={{ minWidth: 275, maxWidth:300 }}>
      <CardContent>
        <CardMedia
          component="img"
          height="100%"
          image={anime.images.jpg.image_url}
          alt="Paella dish"
        />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           Title: {anime.title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           Rating: {anime.rating}
        </Typography>
      </CardContent>
    </Card>
  );
}
