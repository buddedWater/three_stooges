import React from 'react';
import ReactDom from 'react-dom';
import Index from './components/index';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default class Root extends React.Component{
	render(){
		return(
			<Index />
			)
	}
} 

ReactDom.render(<Root/> ,document.getElementById("example"));