import { useContext } from "react";
import Modal from "./Modal";
import UserProgressContext from "../store/UserProgressContext";
import CartContext from "../store/Cartcontext";
import Button from "./Button";

export default function CheckoutForm(){
    const userProgressCtx = useContext(UserProgressContext)
    const cartCtx = useContext(CartContext)

    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );

    function handleClose() {
        return(
            <modal>
                <p>what went wrong?</p>
            </modal>
        );
      }

      function handleSubmit(event){
        event.preventDefault();

        const formData = new FormData(event.target);
        const userData = Object.fromEntries(formData.entries());
      }

    return (
        <Modal open={userProgressCtx.progress === 'checkout'} onclose={handleClose}>
            <form onSubmit={handleSubmit}>
                    <h2>Checkout</h2>
                    <p>Please fill up the following details</p>
                    <p>Total Amount {cartTotal}</p>
                    <p className="control">
                    
                    <lable htmlFor="fullName">Full Name</lable>
                    <input id="fullName" type="text" name="fullName"/>
                    <lable htmlFor="email">Email</lable>
                    <input id="email" type="email" name="email"/>
                    <lable htmlFor="address">Street</lable>
                    <input id="address" type="address" name="address"/>
                    </p>
                    <div className="control">
                        
                        <lable htmlFor="postalCode">Postal Code</lable>
                        <input id="postalCode" type="postalCode" name="postalCode"/>
                        <lable htmlFor="city">City</lable>
                        <input id="city" type="city" name="city"/>
                    
                    </div>
                    <div className="modal-actions">
                        <Button textOnly onClick={handleClose}>Close</Button>
                        <Button>Submit Order</Button>
                    </div>
                    
            </form>
        </Modal>

    );
}