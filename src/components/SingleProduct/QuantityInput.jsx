import React, { Fragment } from 'react';

import './QuantityInput.css';

const QuantityInput = () => {
  return (
    <Fragment>
      <button className='quantity_input_button' disabled>
        {' '}
        -{' '}
      </button>
      <p className='quantity_input_count'>1</p>
      <button className='quantity_input_button'> + </button>
    </Fragment>
  );
};

export default QuantityInput;
