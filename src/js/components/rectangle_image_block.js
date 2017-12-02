import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
export default class RectangleImageBlock extends React.Component{
	render(){
		return(
			<section className="section-padding">
				<div className="rectangle-section-image">
					<Row>
						<Col span={2}></Col>
						<Col span={6}>
							<img src="./src/image/blog_img_1.png"/>
							<p><span>手拿手表的女孩</span></p>
							<p className="blog-date"><span>2017/12/01</span></p>
						</Col>
						<Col span={1}></Col>
						<Col span={6}>
							<img src="./src/image/blog_img_2.png"/>
							<p><span>手拿鲜花的女孩</span></p>
							<p className="blog-date"><span>2017/12/01</span></p>
						</Col>
						<Col span={1}></Col>
						<Col span={6}>
							<img src="./src/image/blog_img_3.png"/>
							<p><span>躺在地上的女孩</span></p>
							<p className="blog-date"><span>2017/12/01</span></p>
						</Col>
						<Col span={2}></Col>
					</Row>
				</div>
			</section>
			)
	}
}