import React, { Component } from 'react';
import RandomGenerator from './RandomGenerator.jsx';
import { numbers } from './data';
import Sound from 'react-sound';

class Numbers extends Component {
    state = { showComp: false }
    
    handleClick = () => {
        this.setState({ showComp: !this.state.showComp })
    }
    
    handleNext = () => {
        this.forceUpdate();
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
                    </div> :
                    <div>
                        <RandomGenerator array={numbers} />
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

export default Numbers;