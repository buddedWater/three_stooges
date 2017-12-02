import React from 'react';
import ContentBlock from './content-block';
import CircleImageBlock from './circle_image_block';
import RectangleImageBlock from './rectangle_image_block';
import { Row, Col } from 'antd';

export default class Container extends React.Component{
	render(){
		return(
			<div class="container">
				<section>
					<div className="title-info-section">
						<Row>
							<Col span={4}></Col>
							<Col span={16}>
								<iframe className="title-content-image" src="./src/image/svg/title_img.svg" width="100%" height="80"></iframe>
								<div className="title-content-desc">
									<span>
										我们生活在一个嘉年华式的世界里面，喧嚣到没有一分钟能够停下来，每天都在坐过山车。但是这种光鲜之下到底是什么？
									</span>
								</div>
							</Col>
							<Col span={4}></Col>
						</Row>						
					</div>
					<div className="video-content">
						<img src="./src/image/video.png" />
					</div>
				</section>
				<section class="product-container  clearfix">
					<ContentBlock src={"./src/image/product_1.png"} />
					<ContentBlock src={"./src/image/product_2.png"} />
					<ContentBlock src={"./src/image/product_3.png"} />
					<ContentBlock src={"./src/image/product_4.png"} />
					<ContentBlock src={"./src/image/product_5.png"} />
				</section>
				<CircleImageBlock />
				<section className="band-introduce-section">
					<div className="band-logo">
						<iframe src="./src/image/svg/ourlogo.svg" />
					</div>
					<div className="band-name">THREE STOOGES</div>
					<div className="band-desc">不成问题的问题</div>
				</section>
				<RectangleImageBlock />
			</div>
		)
	}
}