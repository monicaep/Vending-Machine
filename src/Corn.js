import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';
import './Corn.css';

class Corn extends Component {
    render() {
        return (
            <div className='Corn'>
                <Message>
                    <h3>Someone beat you to the corn!</h3>
                </Message>
                <iframe src="https://giphy.com/embed/AitgnOWCvUGCQ" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                <Message>
                    <Link to='/'>Go Back</Link>
                </Message>
            </div>

        )
    }
}

export default Corn;