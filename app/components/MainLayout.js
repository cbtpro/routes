import React from 'react';
import Header from './Header';

class MainLayout extends React.Component {
	render () {
		return (
			<div id={this.props.id}>
				<div className="header">
					<Header />
				</div>
				<div className="container">
					<div className="middle">
						<h4>middle</h4>
						<p>HHHHHHHHHHHHHHHHHHHHHH
						hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
						HHHHHHHHHHHHHHHHHHHHHH
						hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
						</p>
					</div>
					<div className="left">
						<h4>left</h4>
						<p>oooooooooooooo
						00000000000000000
						ooooooooooooooo
						ooooooooooooooo
						000000000000000</p>
					</div>
					<div className="right">
						<h4>right</h4>
						<p>BBBBBBBBBBBBBB
						BBBBBBBBBBBBBBBBBB
						88888888888888888888</p>
					</div>
				</div>
				<div className="footer">
					<h4>footer</h4>
				</div>
			</div>
		);
	}
}

export default MainLayout