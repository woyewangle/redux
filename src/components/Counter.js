import React, { Component } from 'react';

export default class Counter extends Component {

    constructor(props) {
        super(props);
        this.inputText=React.createRef();

    }

    multiplement= () =>{
        const multipleNum=this.inputText.current.value;
        const onMultipliy=this.props.onMultipliy;
        onMultipliy(multipleNum,this.props.index);

    }

    Delay1=()=>{
        const onIncrement=this.props.onIncrement;
        setTimeout(() => {onIncrement(this.props.index)}, 1000)
    }

    render() {
        const {value, onIncrement, onDecrement, index} = this.props;
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
                    <button onClick={this.Delay1}>Increment Async
                    </button>
                </p >

            </div>
        );
    }
}
