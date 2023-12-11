import { useEffect, useState } from "react";
import Button from "./Button";

export default function Meals() {
  // State to store the available meals
  const [availableMeals, setAvailableMeals] = useState([]);

  useEffect(() => {
    // Function to fetch meals from the server
    const fetchMeals = async () => {
      // Fetch data from the provided API endpoint
      const response = await fetch("http://localhost:3000/meals");

      // Parse the response as JSON and update the state with the fetched meals
      setAvailableMeals(await response.json());
    };

    // Call the fetchMeals function when the component mounts
    fetchMeals();
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <ul id="meals">
      {/* Map through the available meals and render each one as an <li> element */}
      {availableMeals.map((meal) => (
        <li className="meal-item" key={meal.id}>
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
            <Button>Add To Cart</Button>
          </p>
        </li>
      ))}
    </ul>
  );
}
