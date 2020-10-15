import React from 'react';
import bannerImage from '../../images/logos/Frame.png';
import {Button} from 'react-bootstrap';
import './Banner.css';


const Banner = () => {
    return (
        <div>
            <div className="container bannerPart">
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-sm-5 col-12 textPart ">
                        <h1>Lets Grow Your</h1>
                        <h1>Brand To The</h1>
                        <h1>Next Level</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eos praesentium consectetur optio commodi quia dicta similique. Cupiditate quibusdam error iste qui nam</p>
                        <Button variant="outline-info">Hire Us</Button>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-7 col-12 bannerImage ">
                        <img src={bannerImage}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;