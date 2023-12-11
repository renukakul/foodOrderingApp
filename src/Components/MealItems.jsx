import { useContext } from "react";
import CartContext from "../store/Cartcontext";
import Button from "./Button";

export default function MealIteams({meal}){

    const cartctx = useContext(CartContext)

    function handleAddTocartButton(){
        cartctx.addItem(meal)
    }

    return (
        <li className="meal-item" >
            <article>
                {/* Display the meal image */}
                <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />

                {/* Display the meal name */}
                <h3>{meal.name}</h3>

                {/* Display the meal price */}
                <p className="meal-item-price">{meal.price}</p>

                {/* Display the meal description */}
                <p className="meal-item-description">{meal.description}</p>

                {/* Display the actions for the meal, e.g., add to cart button */}
                <p className="meal-item-actions">
                    <Button onClick={handleAddTocartButton}>Add To Cart</Button>
                </p>
            </article>
        </li>
    );
}