import React from 'react';
import { Route, Switch } from 'react-router';
import { ABC,
         Numbers,
         Shapes,
         HappyLearning,
         Navbar }from './index';


const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path='/' component={HappyLearning} />
                <Route path='/abc' component={ABC} />
                <Route path='/numbers' component={Numbers} />
                <Route path='/shapes' component={Shapes} />
            </Switch>
        </div>
    )
}

export default App;

