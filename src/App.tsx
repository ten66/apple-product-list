import React from 'react';
import { Grid } from '@mui/material';
import './App.css';
import DefaultAppBar from './components/AppBar';
import ProductList from './components/ProductList';
import { macList, iPhoneList, iPadList, WatchList } from "./productsInfo";

const App = () => (
  <div className="App">
    <DefaultAppBar />
    <Grid
      container
      display="flex"
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      sx={{ p: 1 }}
    >
      <ProductList productList={ macList } />
      <ProductList productList={ iPhoneList } />
      <ProductList productList={ iPadList } />
      <ProductList productList={ WatchList } />
    </Grid>
  </div>
);


export default App;
