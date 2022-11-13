import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import Header from '../components/header';


const Layout = () => {   

    return (      
        <>
        <Header/>
        <main>
            <Outlet/>
        </main>         
        </>  
    )
}     

export default Layout;
