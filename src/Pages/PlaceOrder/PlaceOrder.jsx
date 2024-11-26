import React, { useContext, useState } from 'react';
import './PlaceOrder.css';
import { BiRupee } from 'react-icons/bi';
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext)
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  //   const handlePromoCodeSubmit = () => {
  //     // Example: apply a 10% discount for a valid promo code
  //     if (promoCode === 'DISCOUNT10') {
  //         setDiscount(getTotalCartAmount() * 0.1); // 10% discount
  //     } else {
  //         alert('Invalid promo code');
  //         setDiscount(0);
  //     }
  // };

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder=' Last Name' />
        </div>
        <input type="email" placeholder='Email Address' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder=' State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder=' Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p><BiRupee />{getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p><BiRupee />{getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>
          <hr />
          {/* Display the discount and adjusted total */}
          {discount > 0 && (
            <div className="cart-total-details">
              <p>Discount</p>
              <p>-<BiRupee />{discount}</p>
            </div>
          )}
          <div className="cart-total-details">
            <b>Total</b>
            <b><BiRupee /> {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2 - discount}</b>
          </div>
          <button onClick={() => navigate('/placeorder')}>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;


