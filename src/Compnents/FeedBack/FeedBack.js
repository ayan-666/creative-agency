import React from 'react';
import customer1 from '../../images/customer-1.png';
import customer2 from '../../images/customer-2.png';
import customer3 from '../../images/customer-3.png';

const FeedBack = () => {
    return (
        <div>
            <h1 style={{'textAlign':"center","marginTop":"20px"}}>Clients Feed Back</h1>
            <div className="container service">
                <div className="row">
                    <div className="col-4" style={{"textAlign":"center","marginTop":"10px"}}>
                        <img src={customer1} alt=""/>
                        <h5>Nasan Tasnim</h5>
                        <h6>CEO , MainCheap</h6>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit minus dignissimos accusantium. Quam,</p>
                    </div>
                    <div className="col-4" style={{"textAlign":"center","marginTop":"10px"}}>
                        <img src={customer2} alt=""/>
                        <h5>Nasan Tasnim</h5>
                        <h6>CEO , MainCheap</h6>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit minus dignissimos accusantium. Quam,</p>
                    </div>
                    <div className="col-4" style={{"textAlign":"center","marginTop":"10px"}}>
                        <img src={customer3} alt=""/>
                        <h5>Nasan Tasnim</h5>
                        <h6>CEO , MainCheap</h6>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit minus dignissimos accusantium. Quam,</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedBack;