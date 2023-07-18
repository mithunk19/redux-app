// import {configureStore, applyMiddleware} from '@reduxjs/toolkit'
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger'


//reducer function
const reducer = (state = { initialState: 1 }, action) => {
    switch (action.type) {
        case 'increment': // Update the action type as a string
            return {
                ...state,
                initialState: state.initialState + 1,
            };
        case 'decrement': // Update the action type as a string
        return {
            ...state,
            initialState: state.initialState - 1,
        };
        case 'nochange': // Update the action type as a string
            return {
                ...state,
                initialState: state.initialState + action.payload,
            };
        default:
            return state;
    }
};

//redux store

const store = createStore(reducer, applyMiddleware(logger.default))

//action creator
const noChange = (value) => {
    return {
        type: 'nochange',
        payload: value
    }
}
const inc = () => {
    return {
        type: 'increment'
    }
}
const dec = () => {
    return {
        type: 'decrement'
    }
}

//action and dispatch method
setTimeout(()=>{
    store.dispatch(noChange(3));
}, 1000)

setTimeout(()=>{
    store.dispatch(inc());
}, 5000)

setTimeout(()=>{
    store.dispatch(dec());
}, 10000)


