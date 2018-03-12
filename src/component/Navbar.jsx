import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div id='nav'>
                <div id='title'>ABC 123 Shapes For Me</div>
                <div id='navlinks' className='container'>
                    <div>
                        <Link to='/'>Home</Link>
                    </div>
                    <div>
                        <Link to='/abc'>ABC's</Link>
                    </div>
                    <div>
                        <Link to='/numbers'>Numbers</Link>
                    </div>
                    <div>
                        <Link to='/shapes'>Shapes</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;