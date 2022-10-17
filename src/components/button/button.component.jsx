import React from 'react';

import {
	BaseButton,
	GoogleSignInButton,
	InvertedButton,
} from './button.styles';

export const BUTTON_TYPES_CLASS = {
	base: 'base',
	google: 'google-sign-in',
	inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPES_CLASS.base) =>
	({
		[BUTTON_TYPES_CLASS.base]: BaseButton,
		[BUTTON_TYPES_CLASS.google]: GoogleSignInButton,
		[BUTTON_TYPES_CLASS.inverted]: InvertedButton,
	}[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
	const CustomButton = getButton(buttonType);

	return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
