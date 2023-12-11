// Import necessary dependencies and components
import React, { useContext } from "react";
import Button from "./Button.jsx";
import Modal from "./Modal.jsx";
import CartContext from "../store/Cartcontext.jsx"
import UserProgressContext from "../store/UserProgressContext.jsx";
import CartItems from "./CartItems.jsx";

// Functional component representing the shopping cart
export default function Cart() {
    // Access the CartContext and UserProgressContext using the useContext hook
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    // Calculate the total price of items in the cart
    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );

    // Function to close the cart modal
    function handleCloseCart() {
        userProgressCtx.hideCart();
    }

    // Render the cart modal with cart items and total
    return (
        <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map((item) => (
                    // Render individual CartItems component for each item in the cart
                    <CartItems
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        price={item.price}
                        onIncrease={() => cartCtx.addItem(item)}
                        onDecrease={() => cartCtx.removeItem(item.id)}
                    />
                ))}
            </ul>
            {/* Display the total price of items in the cart */}
            <p className="cart-total">{cartTotal}</p>
            {/* Modal actions with Close and Go to Checkout buttons */}
            <p className="modal-actions">
                <Button textOnly onClick={handleCloseCart}>
                    Close
                </Button>
                <Button onClick={handleCloseCart}>Go to Checkout</Button>
            </p>
        </Modal>
    );
}
