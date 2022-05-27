import React from "react";
import ProductCard from './ProductCard';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ProductInfo } from "../types";

type Props = {
  productList: ProductInfo[],
}

const ProductList: React.FC<Props> = ({ productList }) => (
  <Grid
    item
    sx={{
      width: "100%",
      pb: 5,
    }}
  >
    <Box
      sx={{
        p: 1,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant='h5'
        sx={{ 
          color: "white",
          p: 1,
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-start" },
          alignItems: "center",
        }}
        >
        { productList[0].type }
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "center", sm: "flex-start" },
        }}
      >
        { productList.map((product) => (
          <Box sx={{ py: 1, pr: 2, }}>
            <ProductCard product={product} />
          </Box>
        ))}
      </Box>
    </Box>
  </Grid>
);


export default ProductList;
