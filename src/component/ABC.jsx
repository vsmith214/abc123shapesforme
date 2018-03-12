import React, { Component } from 'react';
import { letters } from './data';
import RandomGenerator from './RandomGenerator.jsx';
import Sound from 'react-sound';

class ABC extends Component {
    state = { showComp: false }

    handleClick = () => {
        this.setState({ showComp: !this.state.showComp })
    }

    handleNext = () => {
        this.forceUpdate();
    }

    handleSound = () => {
        
    }


    render() {
        const { showComp } = this.state;
        const random = letters[Math.floor(Math.random() * letters.length)]
        return (
            <div>
                <div>
                    <h1 className='header'>Letters</h1>
                </div>

                { !showComp ?
                    <div className='random'>
                        <img src={random.img} alt={random.value} sound={random.sound} />
                    </div> :
                    <div>
                         <RandomGenerator array={letters} display={false} />
                    </div>
                }

                <div className='buttons'>
                    <div className='menu' >
                        { !showComp && <button type='button' className='btn' onClick={this.handleClick}>Randomize</button>}
                    </div>
                    <div className='menu'>
                        <button type='button' className='btn' onClick={this.handleSound}>Play Sound</button>
                    </div>
                    <div className='menu'>
                        {!showComp && <button type='button' className='btn' onClick={this.handleNext}>Next</button> }
                    </div>
                        <div className='menu'>
                    { showComp && <button type='button' className='btn' onClick={this.handleClick}>Quit</button> }
                    </div>
                </div>
            </div>
        )
    }
}

export default ABC;