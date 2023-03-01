import React, {useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import AppRoutes from '../AppRoutes';


const Landing = () => {

    const [search, setSearch] = useState("")

    return (
    <>
        <BrowserRouter> 

            <Navbar setSearch={setSearch}/>
            <AppRoutes/>
            <Footer/>

        </BrowserRouter>
    </>
    );
}

export default Landing