import React, { Component } from 'react';
import RandomGenerator from './RandomGenerator.jsx';
import { shapes } from './data';
import { Link } from 'react-router-dom';

class Shapes extends Component {
    state = { showComp: false }
    
    handleClick = () => {
        this.setState({ showComp: !this.state.showComp })
    }
    
    handleNext = () => {
        this.forceUpdate();
    }

    handleSound = sound => {
        this.sound = new Audio(sound);
        this.sound.play();
    }
    
    
    render() {
        const { showComp } = this.state;
        const random = shapes[Math.floor(Math.random() * shapes.length)]
        return (
            <div>
                <div>
                    <h1 className='header'>Shape Shifting</h1>
                </div>
    
                { !showComp ?
                    <div className='random'>
                        <img src={random.img} alt={random.id} />
                        <audio src={random.sound} autoPlay></audio>
                    </div> :
                    <div>
                        <RandomGenerator array={shapes} />
                    </div>
                }
    
                { !showComp && 
                <div id='shapebuttons'>
                    <button type='button' className='shapes' onClick={this.handleClick}>Randomize</button>
                    <button type='button' className='shapes' onClick={() => this.handleSound(random.sound)}>Play Sound</button>
                    <button type='button' className='shapes' onClick={this.handleNext}>Next</button> 
                    <button type='button' className='shapes'><Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Quit</Link></button>
                </div>
                }
            </div>
        )
    }
}

export default Shapes;