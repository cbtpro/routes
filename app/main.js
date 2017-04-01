import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import HelloMessage from './components/HelloMessage';
import MainLayout from './components/MainLayout';
import App from './components/App';

/*
ReactDOM.render(
	<HelloMessage name="Peter" />,
	document.getElementById('app')
);
*/
/**
ReactDOM.render(
	<MainLayout id="main" />,
	document.getElementById('app')
);
*/

ReactDOM((
	<Router history={hashHistory}>
		<Route path="/" component={App}/>
	</Router>
), document.getElementById('app'));