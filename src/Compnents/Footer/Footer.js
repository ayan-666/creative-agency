import React from 'react';
import './Footer.css';
import {Button} from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="container footer">
            <div className="row">
                <div className="col-6 text">
                    <h1>Let Us Handle Your</h1>
                    <h1>Project Profrssionally</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo tenetur iste quod nostrum eum nihil. Quibusdam voluptas fugiat nostrum! Ipsa suscipit animi voluptas voluptatem obcaecati modi quos optio porro doloremque?</p>
                </div>
                <div className="col-6 form">
                    <input type="email" name="email" placeholder="Write Your Email"/>
                    <br/>
                    <br/>
                    <input type="text" name="name" placeholder="Write Your Company Name"/>
                    <br/>
                    <br/>
                    <input type="textarea" style={{"width":"50%","height":"200px"}}/>
                    <br/>
                    <br/>
                    <Button variant="outline-info">Login</Button>
                </div>
            </div>
        </div>
    );
};

export default Footer;