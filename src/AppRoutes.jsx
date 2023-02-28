import React from 'react';
import {Routes, Route} from "react-router-dom";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/Navbar/CartWidget';


const AppRoutes = () => {
    return (
    <Routes>

        <Route exact path="/itemlistcontainer" element={<ItemListContainer/>} />
        <Route exact path="/category/:categoryId" element={<ItemListContainer/>} />
        <Route exact path="/category/:categoryId" element={<ItemListContainer/>} />
        <Route exact path="/category/:categoryId" element={<ItemListContainer/>} />
        <Route exact path="/cartwidget" element={<CartWidget/>} />

    </Routes>
    )
}

export default AppRoutes