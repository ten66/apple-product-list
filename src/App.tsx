// import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './components/AppBar';
import ProductList from './components/ProductList';
import { macList, iPhoneList, iPadList, WatchList } from "./productsInfo";

const App = () => {
  return (
    // <div className="App">
    //   <ButtonAppBar />
    //   <div className="App-header">
    //     <div>a</div>
    //   </div>
    // </div>
    <div className="App">
      <ButtonAppBar />
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
}

export default App;
