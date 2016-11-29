import '../css/bootstrap.css';

import  React from 'react';
import ReactDOM from 'react-dom';
import Nav from './home/navbar';
import Jumbotron from './home/jumbotron';
import Form from './home/form';

ReactDOM.render(
   <div>
       <Nav/>
       <Jumbotron/>
       <Form/>
   </div>,
    document.getElementById("app")
);

