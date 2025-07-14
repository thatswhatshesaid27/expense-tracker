import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import { Buttons } from "./components/Buttons/Buttons";
import Chart from "./components/Charts/Chart";

function App() {
  return (
    <div className="App" style={{ margin: "0", padding: "0" }}>
      <Navbar />
      <div className="card-container">
        <Card label={"Total Budget"} amount={20000} />
        <Card label={"Total Expenses"} amount={12205} />
        <Card label={"Total Savings"} amount={7795} />
      </div>
      <div className="button-container">
        <Buttons />
      </div>
      <div className="chart-container">
        <Chart />
      </div>
      <h2>Expense List</h2>
      <div className="list-container">
        <span>Sr.</span>
        <span>Expense.</span>
        <span>Amount.</span>
        <>
          <span>Edit/Delete</span>
        </>
      </div>
    </div>
  );
}
export default App;
