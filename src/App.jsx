import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import { Buttons } from "./components/Buttons/Buttons";
import Chart from "./components/Charts/Chart";
import List from "./components/List/List";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
  const [budget, setBudget] = useState(0);
  const [flag, setFlag] = useState(false);
  const [saving, setSaving] = useState(0);

  const handleAddExpense = (expense) => {
    const total = Number(expense.amount);
    const newTotal = totalExpense + total;
    setExpenses((prev) => [...prev, expense]);
    setTotalExpense((prevTotal) => prevTotal + total);
    if (!flag) {
      setSaving(budget - total);
      setFlag(true);
    } else {
      setSaving(budget - newTotal);
    }
  };

  const handleBudget = (budget) => {
    setBudget(budget);
  };

  const handleEditExpense = (index, updatedExpense) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index] = updatedExpense;
    setExpenses(updatedExpenses);

    const total = updatedExpenses.reduce(
      (acc, curr) => acc + Number(curr.amount),
      0
    );
    setTotalExpense(total);
    setSaving(budget - total);
  };

  const handleDeleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);

    const total = updatedExpenses.reduce(
      (acc, curr) => acc + Number(curr.amount),
      0
    );
    setTotalExpense(total);
    setSaving(budget - total);
  };

  return (
    <div className="App" style={{ margin: "0", padding: "30px" }}>
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
      <List
        data={expenses}
        onEditExpense={handleEditExpense}
        onDeleteExpense={handleDeleteExpense}
      />
    </div>
  );
}

export default App;
