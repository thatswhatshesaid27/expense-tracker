import React, { useState } from "react";
import "./List.css";
import EditExpense from "../EditExpense/EditExpense";

const List = ({ data, onEditExpense, onDeleteExpense }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleEditClick = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (index) => {
    setSelectedIndex(index);
    setDeleteModalOpen(true);
  };

  const handleEditSubmit = (updatedData) => {
    onEditExpense(selectedIndex, updatedData);
    setIsModalOpen(false);
  };

  const handleDeleteConfirm = () => {
    onDeleteExpense(selectedIndex);
    setDeleteModalOpen(false);
  };

  return (
    <div className="expense-list">
      <div className="expense-list-heading">
        <div>Sr</div>
        <div>Expense</div>
        <div>Amount</div>
        <div>Edit/Delete</div>
      </div>

      {data.map((item, index) => (
        <div className="single-expense" key={index}>
          <div className="list-content">{index + 1}</div>
          <div className="list-content">{item.category}</div>
          <div className="list-content">{item.amount}</div>
          <div className="edit-button-container">
            <button
              className="edit-button"
              onClick={() => handleEditClick(index)}
            >
              Edit
            </button>
            <button
              className="delete-button"
              onClick={() => handleDeleteClick(index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {isModalOpen && (
        <EditExpense
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleEditSubmit}
          initialData={data[selectedIndex]}
        />
      )}

      {deleteModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <h2 className="modal-title">Are you sure</h2>
            <p>You won't be able to revert this!</p>
            <div className="button-group">
              <button onClick={() => setDeleteModalOpen(false)}>Cancel</button>
              <button className="delete-button" onClick={handleDeleteConfirm}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
