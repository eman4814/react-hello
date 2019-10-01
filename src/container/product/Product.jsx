import React, { Component, Fragment } from 'react';
import './Product.css';
import CardProduct from '../cardproduct/CardProduct';


class Product extends Component {

	state = {
		order: 0
	}


	handleCounterChange = (newValue) => {
		this.setState({
			order: newValue
		})
	}

	render() {
		return (
			<Fragment>
				<div className="product">
					<div className="header">
						<div className="logo">
							<img src="https://etanee.id/img/content/img_logo_etanee_white.svg" alt="" />
						</div>
						<div className="troley">
							<img src="https://etanee.id/img/icon/ic_cart_white.svg" alt="" />
							<div className="count">{this.state.order}</div>
						</div>
					</div>
					<CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
					<CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
					<CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
				</div>
			</Fragment>
		)
	}
}

export default Product;