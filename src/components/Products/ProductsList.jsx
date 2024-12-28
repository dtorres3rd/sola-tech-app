import React from 'react';

import './ProductsList.css';
import ProductCard from './ProductCard';
import useData from './../hooks/useData';
import ProductCardSkeleton from './ProductCardSkeleton';
import { useSearchParams } from 'react-router-dom';

const ProductsList = () => {
  const [search, setSearch] = useSearchParams();
  const category = search.get('category');

  const { data, error, isLoading } = useData(
    '/products',
    {
      params: {
        category: category,
      },
    },
    [category]
  );
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className='products_list_section'>
      <header className='align_center products_list_header'>
        <h2>Products</h2>
        <select name='sort' id='' className='products_sorting'>
          <option value=''>Relevance</option>
          <option value='price desc'>Price: HIGH to LOW</option>
          <option value='price asc'>Price: LOW to HIGH</option>
          <option value='rate desc'>Rate: HIGH to LOW</option>
          <option value='rate asc'>Rate: LOW to HIGH</option>
        </select>
      </header>

      <div className='products_list'>
        {error && <em className='form_error'>{error}</em>}
        {/* implemented optional chaining: if data is only available (? syntax), check if products is null or exists (&& syntax) */}
        {isLoading && skeletons.map((n) => <ProductCardSkeleton key={n} />)}
        {data?.products &&
          data.products.map((product) => (
            <ProductCard
              key={product._id}
              id={product._id}
              image={product.images[0]}
              price={product.price}
              title={product.title}
              rating={product.reviews.rate}
              ratingCounts={product.reviews.counts}
              stock={product.stock}
            />
          ))}
      </div>
    </section>
  );
};

export default ProductsList;
