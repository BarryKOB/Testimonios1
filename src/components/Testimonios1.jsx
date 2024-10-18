import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import '../App.css';

// import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
// import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
// import { IconButton } from '@mui/material';

import { MyFavourite, MyFavouriteBorder, MyButton, BarryBOB} from 'milibreria'; 

// import { mybutton as  Mybutton} from 'milibreria';
// import { BarryBOB } from 'milibreria';

function Testimonios1({ testimon }) {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleIconClick = () => {
        setIsFavorite(prev => !prev)
    }

    return (
        testimon.map((testi) => (
            <Box 
            key={testi.id} 
            sx={{
                margin: "20px", 
            }}>
                <Card sx={{ maxWidth: 430}}>
                    <CardActionArea>
                        <CardMedia sx={{height: 300}}
                            component="img"
                            height="140"
                            image={testi.imgSrc}
                            alt={testi.alt}
                        />
                        <CardContent>
                            <Typography variant="h5">
                                {testi.name}
                            </Typography>
                            <Typography variant="h6">
                                {testi.trabajo}
                            </Typography>
                            <Typography variant="body2">
                                {testi.descripcion}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    {isFavorite ? (
                        <MyFavourite iconColor="red" onClick={handleIconClick}/>
                    ) : (
                        <MyFavouriteBorder iconColor="grey" onClick={handleIconClick}/>
                    )}
                </Card>
                <MyButton
                        text="Hola"
                        txtcolor="blue"
                        bgcolor="red"
                        bordercolor="black"
                        bordersize="1px"
                        size="large" 
                        hoverTxtColor="red"
                        hoverBgColor="blue"
                        onClick={() => alert('Botón clickeado!')}
                /> 
                <BarryBOB
                    title="Lucas"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt saepe tempore ex possimus, iusto debitis omnis veniam quis animi excepturi molestias officia asperiores esse fuga dicta, alias fugit provident aut."
                    avatar="src/assets/Carla.jpg"
                />
            </Box>
        ))
    );
}

export default Testimonios1;
