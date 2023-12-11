import { useEffect, useState } from "react";
import Button from "./Button";
import MealIteams from "./MealItems";

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
        <MealIteams key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
