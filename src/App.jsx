import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import { Buttons } from "./components/Buttons/Buttons";
import Chart from "./components/Charts/Chart";
import List from "./components/List/List";
import AddExpense from "./components/Expense/AddExpense";

function App() {
  var totalE = 0;
  const [expenses, setExpenses] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
  const [budget, setBudget] = useState(0);
  const [flag, setFlag] = useState(false);
  const [saving, setSaving] = useState(0);

  const handleAddExpense = (expense) => {
    const total = Number(expense.amount);
    const newTotal = totalExpense + total;
    // console.log(expense.amount);
    setExpenses((prev) => [...prev, expense]);
    setTotalExpense((prevTotal) => prevTotal + Number(expense.amount));
    if (!flag) {
      console.log("not flag first condition");
      setSaving(budget - expense.amount);
      setFlag(true);
    } else if (flag) {
      console.log("flag true");
      setSaving(budget - newTotal);
    }
  };

  const handleBudget = (budget) => {
    setBudget(budget);
  };
  return (
    <div className="App" style={{ margin: "0", padding: "0" }}>
      <Navbar />
      <div className="card-container">
        <Card label={"Total Budget"} amount={budget} />
        <Card label={"Total Expenses"} amount={totalExpense} />
        <Card label={"Total Savings"} amount={saving} />
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
