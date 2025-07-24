import { useEffect, useState } from "react";
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
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const storedExpenses = localStorage.getItem("expenses");
    const storedBudget = localStorage.getItem("budget");
    const storedFlag = localStorage.getItem("flag");
    console.log("stored values calling");
    console.log(storedExpenses);
    console.log(storedBudget);
    console.log(storedFlag);

    const parsedExpenses = storedExpenses ? JSON.parse(storedExpenses) : [];
    const parsedBudget = storedBudget ? JSON.parse(storedBudget) : 0;
    const isFlagSet = storedFlag === "true";

    setExpenses(parsedExpenses);
    setBudget(parsedBudget);
    setFlag(isFlagSet);

    const total = parsedExpenses.reduce(
      (acc, curr) => acc + Number(curr.amount),
      0
    );

    setTotalExpense(total);
    setSaving(parsedBudget - total);
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
    localStorage.setItem("budget", budget.toString());
    localStorage.setItem("flag", JSON.stringify(flag));
  }, [expenses, budget, flag]);

  const handleAddExpense = (expense) => {
    const updatedExpenses = [...expenses, expense];
    const newTotal = totalExpense + Number(expense.amount);

    setExpenses(updatedExpenses);
    setTotalExpense(newTotal);
    setSaving(budget - newTotal);
    setFlag(true);
  };

  const handleBudget = (newBudget) => {
    const parsed = parseFloat(newBudget);
    setBudget(parsed);
    const total = expenses.reduce((acc, curr) => acc + Number(curr.amount), 0);
    setSaving(parsed - total);
    if (expenses.length > 0) setFlag(true);
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

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredExpenses =
    selectedCategory === "All"
      ? expenses
      : expenses.filter((e) => e.category === selectedCategory);

  return (
    <div className="App" style={{ margin: "0", padding: "30px" }}>
      <Navbar />
      <div className="card-container">
        <Card label={"Total Budget"} amount={budget} />
        <Card label={"Total Expenses"} amount={totalExpense} />
        <Card label={"Total Savings"} amount={saving} />
      </div>
      <br />
      <div className="button-container">
        <Buttons
          onAddExpense={handleAddExpense}
          onAddBudget={handleBudget}
          onCategorySelect={handleCategorySelect}
        />
      </div>
      <br />
      <br />
      <div className="chart-container">
        <Chart expenses={expenses} />
      </div>
      <br />
      <br />

      <List
        data={filteredExpenses}
        onEditExpense={handleEditExpense}
        onDeleteExpense={handleDeleteExpense}
      />
    </div>
  );
}

export default App;
