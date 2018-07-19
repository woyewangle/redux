import React, { Component } from 'react';
import CounterGroup from "./components/CounterGroup";

class App extends Component {

    constructor(props) {
        super(props);

    }


    render(){
        const {values,onIncrement,onDecrement,onMultipliy}=this.props;
        return(
            <div className="App">
            <CounterGroup
                amount={2}
                values={values}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onMultipliy={onMultipliy}
            />
            </div>
        );

    }
}

export default App;