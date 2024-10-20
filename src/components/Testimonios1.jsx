import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import '../App.css';

import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

import { IconButton } from '@mui/material';

function Testimonios1({ testimonio }) {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleIconClick = () => {
        setIsFavorite(prev => !prev);
    };

    return (
        <Box 
            sx={{ margin: "20px" }}>
            <Card sx={{ maxWidth: 430 }}>
                <CardActionArea>
                    <CardMedia sx={{ height: 300 }}
                        component="img"
                        image={testimonio.imgSrc}
                        alt={testimonio.alt}
                    />
                    <CardContent>
                        <Typography variant="h5">
                            {testimonio.name}
                        </Typography>
                        <Typography variant="h6">
                            {testimonio.trabajo}
                        </Typography>
                        <Typography variant="body2">
                            {testimonio.descripcion}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <IconButton onClick={handleIconClick}>
                    {isFavorite ? (
                        <FavoriteRoundedIcon sx={{ color: "red" }}/>
                    ) : (
                        <FavoriteBorderRoundedIcon sx={{ color: "grey" }}/>
                    )}
                </IconButton>
            </Card>
        </Box>
    );
}

export default Testimonios1;

