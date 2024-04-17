import React from 'react';
import "../styles/productcard.css";
import logo from "../assets/logo.png";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const ProductCard = () => {
  return (
    <div className="product-card-container">
      <Card>
        <CardActionArea>
            <CardMedia
                component="div"
                className="card-media-container"
                >
                <img
                    alt="Example product"
                    src={logo}
                    title="Example Product"
                />
            </CardMedia>

            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Example Product
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Product Description
                </Typography>
                <Typography variant="h6" color="textPrimary">
                Price: $99000
                </Typography>
            </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ProductCard;
