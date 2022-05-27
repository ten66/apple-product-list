import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import theme from "../styles";
import { ProductInfo } from '../types';

type Props = {
  product: ProductInfo;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Card sx={{
      minWidth: "12rem",
      maxWidth: "18rem",
      color: "white",
    }}>
      <CardMedia
        component="img"
        image="https://www.apple.com/v/macbook-air/n/images/overview/macbook_air__cvqhw0f6aq82_large_2x.jpg"
        alt="mac"
      />
      <CardContent sx={{ 
        background: "black",
        height: "7rem",
      }}>
        <Typography gutterBottom variant="h5" component="div">
          { product.name }
        </Typography>
        <Typography variant="body2" color="white">
          115,280円（税込）から
        </Typography>
      </CardContent>
      <CardActions sx={{ background: "black" }}>
        <Button
          size="small"
          sx={{
            color: theme.palette.secondary.light,
          }}
        >
          購入
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
