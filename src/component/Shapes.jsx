import React, { Component } from 'react';
import RandomGenerator from './RandomGenerator.jsx';
import { shapes } from './data';
import Sound from 'react-sound';

class Shapes extends Component {
    state = { showComp: false }
    
    handleClick = () => {
        this.setState({ showComp: !this.state.showComp })
    }
    
    handleNext = () => {
        this.forceUpdate();
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
                    </div> :
                    <div>
                        <RandomGenerator array={shapes} />
                    </div>
                }
    
                <div className='buttons'>
                    { !showComp && <button type='button' className='btn' onClick={this.handleClick}>Randomize</button>}
                    <button type='button' className='btn' onClick={this.handleSound}>Play Sound</button>
                    {!showComp && <button type='button' className='btn' onClick={this.handleNext}>Next</button> }
                    { showComp && <button type='button' className='btn' onClick={this.handleClick}>Quit</button> }
                </div>
            </div>
        )
    }
}

export default Shapes;