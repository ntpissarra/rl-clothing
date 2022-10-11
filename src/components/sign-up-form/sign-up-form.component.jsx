import React, { useState } from 'react';

import './sign-up.form.styles.scss';

import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const defaultformFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultformFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultformFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert('passwords do not match');
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);

			await createUserDocumentFromAuth(user, { displayName });
			resetFormFields();
		} catch (error) {
			if ((error.code = 'auth/email-already-in-use')) {
				alert('Cannot create user, email already in use');
			} else {
				console.log('user creation encountered an error', error);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className="sign-up-container">
			<h2>Dont't have an account?</h2>
			<span>Sign up with you email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Display Name"
					inputOptions={{
						type: 'text',
						name: 'displayName',
						value: displayName,
						required: true,
						onChange: handleChange,
					}}
				/>
				<FormInput
					label="Email"
					inputOptions={{
						type: 'email',
						name: 'email',
						value: email,
						required: true,
						onChange: handleChange,
					}}
				/>
				<FormInput
					label="Password"
					inputOptions={{
						type: 'password',
						name: 'password',
						value: password,
						required: true,
						onChange: handleChange,
					}}
				/>
				<FormInput
					label="Confirm Password"
					inputOptions={{
						type: 'password',
						name: 'confirmPassword',
						value: confirmPassword,
						required: true,
						onChange: handleChange,
					}}
				/>
				<Button children="sign in" />
			</form>
		</div>
	);
};

export default SignUpForm;
