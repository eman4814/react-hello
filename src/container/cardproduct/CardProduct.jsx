import React, { Component } from 'react';


class CardProduct extends Component {

	state = {
		order: 0
	}

	handleCounterChange = (newValue) => {
		this.props.onCounterChange(newValue)
	}

	handlePlus = () => {
		this.setState({
			order: this.state.order + 1
		}, () => {
			this.handleCounterChange(this.state.order);
		})

	}

	handleMinus = () => {
		if (this.state.order > 0) {
			this.setState({
				order: this.state.order - 1
			}, () => {
				this.handleCounterChange(this.state.order);
			})
		}

	}


	inputChangeHandler = (event) => {
		const updateOrder = event.target.value;
		console.log(updateOrder);
	}

	render() {
		return (
			// <div className="posts">
				<div className="card">
					<div className="img-thumb-prod">
						<img src="https://s3-ap-southeast-1.amazonaws.com/etanee-images/product/colonel_ori_pack10.jpg" alt="Daging Ayam Bumbu" />
					</div>
					<p className="product-title">Daging Ayam Bumbu</p>
					<p className="product-price">Rp. 24.000,00</p>
					<div className="counter">
						<button className="minus" onClick={this.handleMinus}>-</button>
						<input type="text" value={this.state.order} onChange={(event) => this.inputChangeHandler(event)} />
						<button className="plus" onClick={this.handlePlus}>+</button>
					</div>
				</div>
			// </div>
		)
	}
}

export default CardProduct;