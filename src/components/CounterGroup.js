import React, { Component } from 'react';
import Counter from "./Counter";


export default class CounterGroup extends Component{

    render(){
        const {values,onIncrement,onDecrement,onMultipliy,amount}=this.props;
        let counters=[];

        for(let i=0;i<amount;i++){
            counters.push(
                <Counter
                    index={i}
                    value={values[i]}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    onMultipliy={onMultipliy}
                    key={i}
                />
            )
        }
        return counters;

    }
}