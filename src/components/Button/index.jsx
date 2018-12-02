import React, { Component } from 'react';

import Style from './index.scss';

export default class Button extends Component {
	onClick() {
		this.setState({ count: this.state.count + 1 });
	}

	constructor() {
		super();
		this.state = { count: 0 };

		this.onClick = this.onClick.bind(this);
	}

	render() {
		const { count } = this.state;

		return (
			<div className={Style.Button} onClick={this.onClick}>
				Click Count: {count}
			</div>
		);
	}
}
