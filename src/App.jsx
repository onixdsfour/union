import './App.scss';
import React, { Component } from 'react';
import { Routes, Route} from "react-router-dom";
import Header from './components/header';

import Layout from './pages/layout';
import Product from './pages/product'; 
import Categories from './pages/categories';
import Cart from './pages/cart';

const App = () => {  
  
  return (
    <>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route path="/" element={<Categories />} /> 
              <Route path="/:category" element={<Categories />} />                             
              <Route path="/:category/:id" element={<Product />}/> 
              <Route path="/cart" element={<Cart />} />             
              
          </Route>
          <Route path='*' element={
              <p className='path-error' style={{margin:"50px", fontSize:"24px"}}>
                Page not found
              </p>
            }
          />
        </Routes>
      </>
    )
  }
  
  
  
  export default App;
  
  // const {data, loading, error} = useQuery(ALL_CATEGORIES);
  // if(loading) {
    //   return <div>loading</div>
    // }
    // if(error) {
      //     return <div>error</div>
      // }
      {/* <Header />
      <main className='main container'>
        <h2>Category</h2>
        
    
      </main> */}