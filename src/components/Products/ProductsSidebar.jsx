import React from 'react';

import './ProductsSidebar.css';
import LinkWithIcon from './../Navbar/LinkWithIcon';
import useData from '../hooks/useData';

const ProductsSidebar = () => {
  const { data, error } = useData('/category');
  const categories = data;

  return (
    <aside className='products_sidebar'>
      <h2>Category</h2>

      <div className='category_links'>
        {error && <em className='form_error'>{error}</em>}
        {/* if categories is not null, proceed to map function */}
        {categories &&
          categories.map((category) => (
            <LinkWithIcon
              key={category._id}
              title={category.name}
              link={`/products?category=${category.name}`}
              emoji={`http://localhost:5000/category/${category.image}`}
              sidebar={true}
            />
          ))}
      </div>
    </aside>
  );
};

export default ProductsSidebar;
