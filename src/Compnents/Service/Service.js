import React from 'react';
import './Service.css';
import service1 from '../../images/icons/service1.png';
import service2 from '../../images/icons/service2.png';
import service3 from '../../images/icons/service3.png';

const Service = () => {
    return (
        <div>
            <h1 style={{'textAlign':"center"}}>Provide Awesome Services</h1>
            <div className="container service">
                <div className="row">
                    <div className="col-4" style={{"textAlign":"center","marginTop":"10px"}}>
                        <img src={service1} alt=""/>
                        <h3>Web & Mobile Design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit minus dignissimos accusantium. Quam,</p>
                    </div>
                    <div className="col-4" style={{"textAlign":"center","marginTop":"10px"}}>
                        <img src={service2} alt=""/>
                        <h3>Graphics Design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit minus dignissimos accusantium. Quam,</p>
                    </div>
                    <div className="col-4" style={{"textAlign":"center","marginTop":"10px"}}>
                        <img src={service3} alt=""/>
                        <h3>Web Development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit minus dignissimos accusantium. Quam,</p>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Service;