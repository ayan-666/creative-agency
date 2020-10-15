import React from 'react';
import './Works.css';
import img1 from '../../images/carousel-1.png';
import img2 from '../../images/carousel-2.png';
import img3 from '../../images/carousel-3.png';
const Works = () => {
    return (
        <div className="container works">
            <h1>Here are some of Our Website</h1>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <img src={img1}/>
                    </div>
                    <div className="col-4">
                        <img src={img2}/>
                    </div>
                    <div className="col-4">
                        <img src={img3}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;