import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from './components/HelloMessage';
import MainLayout from './components/MainLayout';

/*
ReactDOM.render(
	<HelloMessage name="Peter" />,
	document.getElementById('app')
);
*/

ReactDOM.render(
	<MainLayout id="main" />,
	document.getElementById('app')
);