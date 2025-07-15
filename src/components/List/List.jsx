import React from "react";
import "./List.css";

const List = ({ data }) => {
  console.log(data);

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
            <button className="edit-button">Edit</button>
            <button className="delete-button">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
