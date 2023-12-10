import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Header/>
      <main id="meals">
        <ul className="meal-item">
          <li>Food Items</li>
        </ul>
      </main>
    </div>
  );
}

export default App;
