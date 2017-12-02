import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
export default class CircleImageBlock extends React.Component{
	render(){
		return(
			<section className="circle-image-section">
				<div className="circle-section-title">
					<span>设计范围</span>
				</div>
				<div className="circle-section-image">
					<Row>
						<Col span={2}></Col>
						<Col span={6}>
							<img src="./src/image/app_img.png"/>
							<p><span>APP 设计</span></p>
						</Col>
						<Col span={1}></Col>
						<Col span={6}>
							<img src="./src/image/web_img.png"/>
							<p><span>WEB 设计</span></p>
						</Col>
						<Col span={1}></Col>
						<Col span={6}>
							<img src="./src/image/logo_img.png"/>
							<p><span>LOGO 设计</span></p>
						</Col>
						<Col span={2}></Col>
					</Row>
				</div>
			</section>
			)
	}
}