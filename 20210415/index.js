import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './App7';
import reportWebVitals from './reportWebVitals';


    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('root')
      );

   