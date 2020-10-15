import React from 'react';
import Banner from '../Banner/Banner';
import FeedBack from '../FeedBack/FeedBack';
import Footer from '../Footer/Footer';
import Logos from '../Logos/Logos';
import Menu from '../Menu/Menu';
import Service from '../Service/Service';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div>
            <Menu></Menu>
            <Banner></Banner>
            <Logos></Logos>
            <Service></Service>
            <Works></Works>
            <FeedBack></FeedBack>
            <Footer></Footer>
        </div>
    );
};

export default Home;