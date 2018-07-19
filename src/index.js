import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './App'
import counter from './reducers/reducers'
import {Provider} from "react-redux"
import {decrement, increment,multiplement} from './action/index'
const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootEl
)

render()
store.subscribe(render)