import '../../../css/bootstrap.css'
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Wrap from './Wrap';
import Todo from '../redux/Reducer';

let store =createStore(Todo);
ReactDOM.render(
    <Provider store={store}>
        <Wrap/>
    </Provider>,
    document.getElementById("app"),function () {
     
    }
);