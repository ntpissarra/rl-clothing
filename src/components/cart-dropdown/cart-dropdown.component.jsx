import React from 'react';

import './cart-dropdown.styles.scss';

import Button from '../button/button.component';

const CartDropDown = () => {
	return (
		<div className="cart-dropdown-container">
			<div className="cart-itens"></div>
			<Button>GO TO CHECKOUT</Button>
		</div>
	);
};

export default CartDropDown;
