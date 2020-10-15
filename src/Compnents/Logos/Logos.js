import React from 'react';
import './Logos.css';
import logo1 from '../../images/logos/google.png';
import logo2 from '../../images/logos/netflix.png';
import logo3 from '../../images/logos/slack.png';
import logo4 from '../../images/logos/uber.png';

const Logos = () => {
    return (
        <div>
            
            <div className="container logos">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-6">
                        <img src={logo1} className="logo1" />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-6">
                        <img src={logo2} className="logo2"/>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-6">
                        <img src={logo3} className="logo3"/>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-6">
                        <img src={logo4} className="logo4"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Logos;