import React, { useState } from "react";
import "./Button.css";
import AddExpense from "../Expense/AddExpense";
import Budget from "../Budget/Budget";

export const Buttons = ({ onAddExpense, onAddBudget, onCategorySelect }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBudgetModalOpen, SetBudgetModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onCategorySelect(category);
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search"
        className="search-input"
        onChange={(e) => handleCategoryClick(e.target.value)}
      />

      <button
        className={`all-expense ${activeCategory === "All" ? "active" : ""}`}
        onClick={() => handleCategoryClick("All")}
      >
        All Expense
      </button>
      <button
        className={`food-drink ${
          activeCategory === "Food & Drink" ? "active" : ""
        }`}
        onClick={() => handleCategoryClick("Food & Drink")}
      >
        Food & Drink
      </button>
      <button
        className={`groceries ${
          activeCategory === "Groceries" ? "active" : ""
        }`}
        onClick={() => handleCategoryClick("Groceries")}
      >
        Groceries
      </button>
      <button
        className={`travel ${activeCategory === "Travel" ? "active" : ""}`}
        onClick={() => handleCategoryClick("Travel")}
      >
        Travel
      </button>
      <button
        className={`health ${activeCategory === "Health" ? "active" : ""}`}
        onClick={() => handleCategoryClick("Health")}
      >
        Health
      </button>

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
