import React, { useState } from "react";
import "./List.css";

import EditExpense from "../EditExpense/EditExpense";

const List = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBudgetModalOpen, SetBudgetModalOpen] = useState(false);
  console.log(data);

  const handleEdit = () => {};

  const handleDelete = () => {};
  return (
    <div className="expense-list">
      <div className="expense-list-heading">
        <span>Sr</span>
        <span>Expense</span>
        <span>Amount</span>
        <span>Edit/Delete</span>
      </div>

      {data.map((item, index) => (
        <div className="single-expense" key={index}>
          <div className="list-content">{index + 1}</div>
          <div className="list-content">{item.category}</div>
          <div className="list-content">{item.amount}</div>
          <div className="edit-button-container">
            <button className="edit-button" onClick={handleEdit}>
              Edit
            </button>
            {/* <EditExpense
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onSubmit={data}
            /> */}
            <button className="delete-button" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
