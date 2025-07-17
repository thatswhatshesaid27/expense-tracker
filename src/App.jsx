import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import { Buttons } from "./components/Buttons/Buttons";
import Chart from "./components/Charts/Chart";
import List from "./components/List/List";
import AddExpense from "./components/Expense/AddExpense";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);

  const handleAddExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const handleBudget = (budget) => {
    setBudget(budget);
  };
  return (
    <div className="App" style={{ margin: "0", padding: "0" }}>
      <Navbar />
      <div className="card-container">
        <Card label={"Total Budget"} amount={budget} />
        <Card label={"Total Expenses"} amount={12205} />
        <Card label={"Total Savings"} amount={7795} />
      </div>
      <div className="button-container">
        <Buttons onAddExpense={handleAddExpense} onAddBudget={handleBudget} />
      </div>
      <div className="chart-container">
        <Chart />
      </div>
      <h2>Expense List</h2>

      <List data={expenses} />
    </div>
  );
}
export default App;
