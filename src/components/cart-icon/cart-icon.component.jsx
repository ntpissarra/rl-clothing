import React, { useContext } from 'react';

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

import { CartContext } from '../../context/cart.context';

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

	return (
		<CartIconContainer
			className="cart-icon-container"
			onClick={toggleIsCartOpen}
		>
			<ShoppingIcon className="shopping-icon" />
			<ItemCount className="item-count">{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
