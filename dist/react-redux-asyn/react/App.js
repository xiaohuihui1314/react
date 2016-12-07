import '../../../css/bootstrap.css'
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Wrap from './Wrap';
import configureStore from '../redux/Store';

let store =configureStore();
ReactDOM.render(
    <Provider store={store}>
        <Wrap/>
    </Provider>,
    document.getElementById("app"),()=>{
        setInterval(function () {
            document.getElementsByClassName("gorgeous")[0].style.transform="scaleX(."+Math.ceil(Math.random()*10)+")"
        },90);
    }
);
