import React from 'react';

export default class Footer extends React.Component{
	render(){
		return(
			<footer>
				<article>
					<p><span>clotmine@163.com</span></p>
					<p><span>XIAN , SHAANXI</span></p>
					<div className="contact-me">
						<iframe src="./src/image/svg/wechat_black_icon.svg" width="22" height="22" />
						<iframe class="last-svg-icon" src="./src/image/svg/weibo_black_icon.svg" width="22" height="22" />
					</div>
				</article>
				<div className="page-footer"><span>2017 MADE BY IVAN / MOOSE / MALE</span></div>
			</footer>
		)
	}
}