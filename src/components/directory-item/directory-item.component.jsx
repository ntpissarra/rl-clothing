import React from 'react';

import { useNavigate } from 'react-router-dom';

import {
	BackgroundImage,
	Body,
	DirectoryItemContaier,
} from './directory-item.style';

const DirectoryItem = ({ category }) => {
	const { title, imageUrl, route } = category;

	const navigate = useNavigate();

	const onNavigateHandler = () => {
		navigate(route);
	};

	return (
		<DirectoryItemContaier>
			<BackgroundImage imageUrl={imageUrl} />
			<Body onClick={onNavigateHandler}>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</Body>
		</DirectoryItemContaier>
	);
};

export default DirectoryItem;
