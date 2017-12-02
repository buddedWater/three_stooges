import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
export default class ContentBlock extends React.Component{

	handleClick(e){
		e.preventDeafault();

	}

	render(){
		return(
			<section class="image_block_content">
				<Row>
					<Col span={2}></Col>
					<Col span={20}>
						<div>
							<img src={this.props.src} onClick={this.handleClick.bind(this)} />
						</div>
					</Col>
					<Col span={2}></Col>
				</Row>
			</section>
		)
	}
}