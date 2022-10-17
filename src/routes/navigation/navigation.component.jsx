import { useContext } from 'react';

import { Outlet } from 'react-router-dom';

import { ReactComponent as RlLogo } from '../../assets/crown.svg';

import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';

import {
	NavigationContainer,
	LogoContainer,
	NavLinks,
	NavLink,
} from './navigation.styles.jsx';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

	return (
		<>
			<NavigationContainer>
				<LogoContainer to="/">
					<RlLogo className="logo" />
				</LogoContainer>
				<NavLinks>
					<NavLink to="/shop">SHOP</NavLink>
					{currentUser ? (
						<NavLink as="span" onClick={signOutUser}>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink to="/authentication">SIGN IN</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropDown />}
			</NavigationContainer>
			<Outlet />
		</>
	);
};

export default Navigation;
