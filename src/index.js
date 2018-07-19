import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './App'
import counter from './reducers/reducers'
import {decrement, increment,multiplement} from './action/index'
const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
    <App
        values={store.getState()}
        onIncrement={(index) => store.dispatch(increment(index))}
        onDecrement={(index) => store.dispatch(decrement(index))}
        onMultipliy={(multipleNum,index) => store.dispatch(multiplement(multipleNum,index))}
    />,
    rootEl
)

render()
store.subscribe(render)