import React, { Component } from 'react';

export default class Counter extends Component {

    constructor(props) {
        super(props);
        this.inputText=React.createRef();

    }

    multiplement=()=>{
        const onMultipliy=this.props.onMultipliy;
        const multipleNum=this.inputText.current.value;
        onMultipliy(multipleNum,this.props.index);

    }

    render() {
        const { value, onIncrement, onDecrement,index} = this.props;
        return (
            <div className="App">
                <p>
                    Clicked: {value} times
                    {' '}
                    <button onClick={()=>onIncrement(index)}>
                        +
                    </button>
                    <button onClick={()=>onDecrement(index)}>
                        -
                    </button>
                    <input type="text" defaultValue={0} ref={this.inputText}/>
                    <button onClick={this.multiplement}>
                        *
                    </button>
                </p >

            </div>
        );
    }
}
