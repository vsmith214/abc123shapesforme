import React, { Component } from 'react';
import Confetti from 'react-dom-confetti';



class RandomGenerator extends Component {
    state = { completed: false, wrong: false };

    handleClick = (evt, correct, item) => {
        evt.persist();
        if(evt.target.alt === correct.value) {
            //Ask john is there a better way to do this
            //set completed to true so confetti will render then reset 
            this.setState({ completed: true }, () => this.setState({ completed: false })); 
        }
        else {
            //  this.props.display = true; 
            <h1>"Try Again"</h1>        
            console.log("Try Again");
        } ;
    }


    render() {
        const confettiConfig = {
            angle: 360,
            spread: 180,
            startVelocity: 98,
            elementCount: 500,
            decay: .99
        };

        const { array } = this.props;
        let randomArray = generateRandoms(array).map(index => array[index]);
        const correct = randomArray[Math.floor(Math.random() * randomArray.length)];
        console.log("Random ARRAY OF 4 ", randomArray);
        console.log("Correct ", correct);

        return (
            <div>
                <ul>
                    <li className="random">
                    { 
                        randomArray.map(item => {
                                return (
                                    <div key={item.id}>
                                        <img src={item.img} alt={item.value} sound={item.sound} onClick={(e) => this.handleClick(e, correct, item)}/>
                                    </div>                
                                )
                            })
                    }
                    </li>
                </ul>
                { this.props.display && <h1>Try Again!!!</h1>}
                <Confetti active={this.state.completed} config={ confettiConfig }/> 
            </div>
        )
    }
     
}

export default RandomGenerator;

//Generate 2 random numbers different from the current index and return an array of them and the current index
const generateRandoms = array => {
    
    let val1 = Math.floor(Math.random() * array.length); //Try to refactor after finding out if this works
    let val2 = Math.floor(Math.random() * array.length);
    let val3 = Math.floor(Math.random() * array.length);
    let val4 = Math.floor(Math.random() * array.length);
    


    while(val1 === val2  || val1 === val3 || val1 === val4) {
        val1 = Math.floor(Math.random() * array.length);
    }

    while(val2 === val1 || val2 === val3 || val2 === val4) {
        val2 = Math.floor(Math.random() * array.length);
    }

    while(val3 === val1 || val3 === val2 || val3 === val4) {
        val3 = Math.floor(Math.random() * array.length);
    }

    return [val1, val2, val3, val4]; //returns indexes to be operated with for guessing correct value

}


