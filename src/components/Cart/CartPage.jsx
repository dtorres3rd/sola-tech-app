import React from 'react';

import './CartPage.css';
import remove from '../../assets/remove.png';
import user from '../../assets/user.webp';
import Table from '../Common/Table';
import QuantityInput from '../SingleProduct/QuantityInput';
const CartPage = () => {
  return (
    <section className='align_center cart_page'>
      <div className='align_center user_info'>
        <img src={user} alt='user profile' />
        <div>
          <p className='user_name'>Dan</p>
          <p className='user_email'>dan@gmail.com</p>
        </div>
      </div>

      <Table headings={['Item', 'Price', 'Quantity', ' Total', 'Remove']}>
        {/* passing tbody - jsx as children props to table component */}
        <tbody>
          <tr>
            <td>Iphone 14</td>
            <td>Php 56,000</td>
            <td className='align_center table_quantity_input'>
              <QuantityInput />
            </td>
            <td>Php 56,000</td>
            <td>
              <img
                src={remove}
                alt='remove icon'
                className='cart_remove_icon'
              />
            </td>
          </tr>
        </tbody>
      </Table>

      <table className='cart_bill'>
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>Php 56,000</td>
          </tr>
          <tr>
            <td>Shipping fee</td>
            <td>Php 50</td>
          </tr>
          <tr className='cart_bill_final'>
            <td>Total</td>
            <td>Php 56,050</td>
          </tr>
        </tbody>
      </table>

      <button className='search_button checkout_button'>Checkout</button>
    </section>
  );
};

export default CartPage;
