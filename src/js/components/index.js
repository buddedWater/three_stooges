var React = require('react');
var ReactDom= require('react-dom');
import { BackTop } from 'antd';

import Header from './header';
import Container from './container';
import Footer from './footer';
export default class Index extends React.Component{

	render(){
		return(
			<div>
				<Header/>
				<Container />
				<Footer/>
				<BackTop/>
			</div>
		)
	}
}
