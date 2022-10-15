import React, { useState } from 'react';

import './sign-in.form.styles.scss';

import {
	createUserDocumentFromAuth,
	signInWithGooglePopup,
	signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const defaultformFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultformFields);
	const { email, password } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultformFields);
	};

	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		await createUserDocumentFromAuth(user);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await signInAuthUserWithEmailAndPassword(
				email,
				password
			);
			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case 'auth/wrong-password':
					alert('incorrect password for email: ' + email);
					break;

				case 'auth/user-not-found':
					alert('no user associate with this email');
					break;

				default:
					console.log(error);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className="sign-in-container">
			<h2>Already have an account?</h2>
			<span>Sign in with you email and password</span>
			<form onSubmit={handleSubmit}>
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
				<div className="buttons-container">
					<Button children="sign in" />
					<Button
						type="button"
						buttonType="google"
						onClick={signInWithGoogle}
						children="google sign in"
					/>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
