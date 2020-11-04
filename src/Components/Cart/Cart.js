import React from 'react';

const Cart = (props) => {
    const { length, total } = props;
    return (
        <div>
            <h4>Cart Summery</h4>
            <br />
            <p>Number of order:{length}</p>
            <p>Total price:{total}</p>
        </div>
    );
};

export default Cart;