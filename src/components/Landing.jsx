import React from 'react';
import {BrowserRouter} from "react-router-dom";
import CartProvider from '../Context/CartContext';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import AppRoutes from '../AppRoutes';


const Landing = () => {
    return (
    <>
    <BrowserRouter> 
        <CartProvider>
            <Navbar/>
            <AppRoutes/>
            <Footer/>
        </CartProvider>
    </BrowserRouter>
    </>
    );
}

export default Landing