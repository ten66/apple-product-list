import React from "react";
import ProductCard from './ProductCard';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { macList } from "../productsInfo";

const ProductList = () => {
  return (
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
          Mac
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", sm: "flex-start" },
          }}
        >
          { macList.map((product) => (
            <Box sx={{ py: 1, pr: 2, }}>
              <ProductCard product={product} />
            </Box>
          ))}
          {/* <Box sx={{ py: 1, pr: 2, }}><ProductCard /></Box> */}
          {/* <Box sx={{ py: 1, pr: 2, }}><ProductCard /></Box>
          <Box sx={{ py: 1, pr: 2, }}><ProductCard /></Box>
          <Box sx={{ py: 1, pr: 2, }}><ProductCard /></Box> */}
        </Box>
      </Box>
    </Grid>
  );
}

export default ProductList;
