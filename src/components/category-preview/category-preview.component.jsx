import React from 'react';

import { Link } from 'react-router-dom';

import ProductCard from '../product-card/product.card.component';

import { CategoryPreviewContaier, Preview } from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {
	return (
		<CategoryPreviewContaier>
			<h2>
				<Link className="title" to={title}>
					{title.toUpperCase()}
				</Link>
			</h2>
			<Preview>
				{products
					.filter((_, index) => index < 4)
					.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</Preview>
		</CategoryPreviewContaier>
	);
};

export default CategoryPreview;
