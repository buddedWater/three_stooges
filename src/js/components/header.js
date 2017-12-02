import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
export default class Header extends React.Component{
	render(){
		return(
			<header>
				<nav>
					<Row className="info-nav">
						<Col span={2}></Col>
						<Col span={20}>
							<div className="clearfix top-info">
								<div><img src="./src/image/headportrait.png"></img></div>
								<div class="top-user-info"><span>刘昆昆</span><span>Ivan</span></div>
							</div>
						</Col>
						<Col span={2}></Col>
					</Row>
				</nav>
				<nav className="index-nav">
					<Row>
						<Col span={2}></Col>
						<Col span={20}>
							<div class="left-nav">
								<Link to={'/'}><span>主页</span></Link>
								<Link to={'/blog'}><span>BLOG</span></Link>
							</div>	
							<div class="right-nav">
								<span>clotmine@163.com</span>
								<span>+86 15877659205</span>
								<iframe src="./src/image/svg/wechat_thite_icon.svg" width="22" height="22" />
								<iframe class="last-svg-icon" src="./src/image/svg/weibo_white_icon.svg" width="22" height="22" />
							</div>	
						</Col>
						<Col span={2}></Col>
					</Row>
				</nav>
			</header>
			)
	}
}