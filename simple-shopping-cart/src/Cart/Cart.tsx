import React from 'react'
import CartItem from '../CartItem/CartItem';
import { CartItemType } from '../App'
import { Wrapper } from './Cart.styles';
type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}
const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
    const totalSum = (items: CartItemType[]) => items.reduce((sum, item) => sum + item.amount * item.price, 0);
    return (
        <Wrapper>
            <h2>Welcome to your Shopping Cart</h2>
            {cartItems.length < 1 ? (<p>No items in you your cart.</p>) :
                (
                    cartItems.map(item => {
                        return (
                            <CartItem
                                key={item.id}
                                item={item}
                                addToCart={addToCart}
                                removeFromCart={removeFromCart}
                            />


                        )
                    })
                )

            }
            <h2>Total : ${totalSum(cartItems).toFixed(2)}</h2>
        </Wrapper>
    )
}

export default Cart
