import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Footer/Navbar/Navbar';
import Banner from '../Pages/Shared/Banner/Banner';
import Holiday from '../Pages/Home/Holiday/Holiday';
import About from '../Pages/Home/About/About';
import Stations from '../Pages/Home/Station/Stations';
import Contact from '../Pages/Home/Contact/Contact';



const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
            <Holiday></Holiday>
            <About></About>
            <Stations></Stations>
            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};

export default Main;