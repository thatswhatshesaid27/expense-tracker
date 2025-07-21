import React, { useState, useEffect } from "react";

const EditExpense = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [expenseName, setExpenseName] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (initialData) {
      setExpenseName(initialData.name || "");
      setDate(initialData.date || "");
      setCategory(initialData.category || "");
      setAmount(initialData.amount || "");
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleExpense = (e) => {
    e.preventDefault();

    if (!category || !amount) return;

    onSubmit({
      name: expenseName,
      date,
      category,
      amount,
    });

    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">Edit Expense</h2>
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
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
              placeholder="Expense Name"
            />
          </div>

          <div className="form-group">
            <label>Date</label>
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
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter Amount"
            />
          </div>

          <button className="submit-button" type="submit">
            Update Expense
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditExpense;
