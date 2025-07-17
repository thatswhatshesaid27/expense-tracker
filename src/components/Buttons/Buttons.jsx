import React, { useState } from "react";
import "./Button.css";
import AddExpense from "../Expense/AddExpense";
import Budget from "../Budget/Budget";

export const Buttons = ({ onAddExpense, onAddBudget }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBudgetModalOpen, SetBudgetModalOpen] = useState(false);
  return (
    <div>
      <input
        type="search"
        placeholder="Search"
        className="search-input"
      ></input>
      <button className="all-expense">All Expense</button>
      <button className="food-drink">Food & Drink</button>
      <button className="groceries">Groceries</button>
      <button className="travel">Travel</button>
      <button className="health">Health</button>
      <button className="add-budget" onClick={() => SetBudgetModalOpen(true)}>
        Add Budget
      </button>
      <Budget
        isOpen={isBudgetModalOpen}
        onClose={() => SetBudgetModalOpen(false)}
        onSubmit={onAddBudget}
      />

      <button className="add-expense" onClick={() => setIsModalOpen(true)}>
        Add Expense
      </button>
      <AddExpense
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={onAddExpense}
      />
    </div>
  );
};
