import React, { useState } from "react";
import "./Budget.css";

const Budget = ({ isOpen, onClose, onSubmit }) => {
  const [budget, setBudget] = useState(0);
  if (!isOpen) return null;

  const handleBudget = (e) => {
    e.preventDefault();
    setBudget(budget);
    onSubmit(Number(budget));
    setBudget(0);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title"></h2>
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <form className="modal-form" onSubmit={handleBudget}>
          <div className="form-group">
            <label>
              Budget<span className="required">*</span>
            </label>
            <input
              type="number"
              placeholder="Budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
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

export default Budget;
