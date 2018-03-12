import React from 'react';
import { Link } from 'react-router-dom';

const HappyLearning = () => {
    return (
        <div>
            <h1 className='header'>Happy Learning</h1>
            <div className='menubuttons'>
                <button type='button' className='btn' id='menu'><Link to='/abc' style={{ textDecoration: 'none', color: 'white' }}>Learn ABC's</Link></button>
                <button type='button' className='btn'id='menu'><Link to='/numbers' style={{ textDecoration: 'none', color: 'white' }}>Learn Numbers</Link></button>
                <button type='button' className='btn'id='menu'><Link to='/shapes' style={{ textDecoration: 'none', color: 'white' }}>Learn Shapes</Link></button>
            </div>
        </div>
    )
}

export default HappyLearning;