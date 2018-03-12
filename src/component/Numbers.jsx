import React, { Component } from 'react';
import RandomGenerator from './RandomGenerator.jsx';
import { numbers } from './data';
import { Link } from 'react-router-dom';

class Numbers extends Component {
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
        const random = numbers[Math.floor(Math.random() * numbers.length)]
        return (
            <div>
                <div>
                    <h1 className='header'>Let's Count</h1>
                </div>
    
                { !showComp ?
                    <div className='random'>
                        <img src={random.img} alt={random.id} sound={random.sound} />
                        <audio src={random.sound}></audio>
                    </div> :
                    <div>
                        <RandomGenerator array={numbers} />
                    </div>
                }
    
                <div className='buttons'>
                    <button type='button' className='btn' onClick={this.handleClick}>Randomize</button>
                    <button type='button' className='btn' onClick={() => this.handleSound(random.sound)}>Play Sound</button>
                    <button type='button' className='btn' onClick={this.handleNext}>Next</button> 
                    <button type='button' className='btn'><Link to='/'>Quit</Link></button>
                </div>
            </div>
        )
    }
}

export default Numbers;