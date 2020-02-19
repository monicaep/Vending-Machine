import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';
import takoImg from './images/Tako.png';
import './FreshTako.css';

class FreshTako extends Component {
    constructor(props) {
        super(props);
        this.state = {
            takos: []
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const x = window.innerWidth * Math.random();
        const y = window.innerWidth * Math.random();
        this.setState(st => ({
            takos: [...st.takos, {x, y}]
        }));
    }

    render() {
        const takos = this.state.takos.map((tako, i) => (
            <img
                key={i}
                src={takoImg} 
                className='tako'
                style={{ top: `${tako.y}px`, left: `${tako.x}px` }}
                alt='tako'
            />
        ))
        return (
            <div 
                className='FreshTako'
            >
                <Message>
                    <h1>Tako Tako</h1>
                    <button onClick={this.handleClick}>More Tako</button>
                    <h3>
                        <Link to='/'>Go Back</Link>
                    </h3>
                </Message>
               {takos}
            </div>
        )
    }
}

export default FreshTako;