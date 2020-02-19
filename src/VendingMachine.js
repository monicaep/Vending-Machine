import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Message from './Message';
import './VendingMachine.css';
import vendingMachineImg from './images/VendingMachine.png';

class VendingMachine extends Component {
    render() {
        return (
            <div 
                className='VendingMachine'
                style={{ backgroundImage: `url(${vendingMachineImg}` }}
            >
                <Message>
                    <h3 classname='VendingMachine-heading'>What would you like to eat?</h3>
                </Message>
                <Message>
                    <h2>
                        <Link exact to='/corn'>Corn</Link>
                    </h2>
                    <h2>
                        <Link exact to='/boba'>Boba</Link>
                    </h2>
                    <h2>
                        <Link exact to='/freshtako'>Fresh Tako</Link>
                    </h2>
                </Message>
            </div>
        )
    }
}

export default VendingMachine;