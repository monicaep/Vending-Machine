import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';
import bobaImg from './images/Boba.png';
import './Boba.css';

class Boba extends Component {
    render() {
        return (
            <div className='Boba'>
                <img src={bobaImg} alt='boba' />
                <Message>
                    <h1>OMG BOBA</h1>
                    <Link to='/'>Go Back</Link>
                </Message>
                <img src={bobaImg} alt='boba' />
            </div>
        )
    }
}

export default Boba;