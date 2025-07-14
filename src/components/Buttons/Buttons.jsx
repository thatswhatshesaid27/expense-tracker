import React from "react";
import "./Button.css";
export const Buttons = () => {
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
      <button className="add-budget">Add Budget</button>
      <button className="add-expense">Add Expense</button>
    </div>
  );
};
