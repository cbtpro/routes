import React from 'react';

class Navigation extends React.Component {
	render() {
		return (
			<ul>
				<li><a href='/'>我的首页</a></li>
				<li><a href='/menu'>目录</a></li>
				<li><a href='/about'>关于</a></li>
			</ul>
		);
	}
}

export default Navigation;