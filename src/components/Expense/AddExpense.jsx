import React, { useState } from "react";
import "./AddExpense.css";

const AddExpense = ({ isOpen, onClose, onSubmit }) => {
  const [expenseName, setExpenseName] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  if (!isOpen) return null;

  const handleExpense = (e) => {
    e.preventDefault();

    if (!category || !amount) return;

    // Send all the data
    onSubmit({
      name: expenseName,
      date,
      category,
      amount,
    });

    // Reset form
    setExpenseName("");
    setDate("");
    setCategory("");
    setAmount("");
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">Add Expense</h2>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>

        <form className="modal-form" onSubmit={handleExpense}>
          <div className="form-group">
            <label>
              Expense Name<span className="required">*</span>
            </label>
            <input
              type="text"
              placeholder="Expense Name"
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>
              Date<span className="required">*</span>
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>
              Category<span className="required">*</span>
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Choose a Category</option>
              <option>Food & Drink</option>
              <option>Travel</option>
              <option>Groceries</option>
              <option>Health</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              Amount<span className="required">*</span>
            </label>
            <input
              type="number"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <button className="submit-button" type="submit">
            + Add Expense
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddExpense;
