import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';


let destination = document.querySelector("#root");

render(<App />, document.getElementById('root'));
