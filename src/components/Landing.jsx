import React from 'react'
import Navbar from './Navbar/Navbar'
import Banner from './Banner/Banner'
import {ItemListContainer} from './ItemListContainer/ItemListContainer'


const Landing = () => {
    return (
    <>
        <Navbar/>
        <Banner/>
        <ItemListContainer greeting={"The most lovely and cute mugs coming soon!"}/>
    </>
    )
}

export default Landing