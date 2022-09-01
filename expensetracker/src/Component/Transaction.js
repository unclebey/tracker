import React, { useState } from "react";
import { uniqueId } from "../utilz";

function TransactionForm({ onNewTransaction }) {
  const [nameValue, setNameValue] = useState("");
  const [amountValue, setAmountValue] = useState("");

  const addTransaction = (type, evt) => {
    evt.preventDefault();

    const data = {
      id: uniqueId(),
      name: nameValue,
      amount: parseInt(amountValue),
      type: type,
    };

    onNewTransaction(data);

    setNameValue("");
    setAmountValue("");
  };

  return (
    <div>
      <h2>Add New Transaction</h2>
      <form>
        <label>
        Event
          <div>
            <input
              className="name-input"
              type="text"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
            ></input>
          </div>
        </label>
        <label>
          Amount
          <div>
            <input
              className="number-input"
              type="number"
              value={amountValue}
              onChange={(e) => setAmountValue(e.target.value)}
            ></input>
          </div>
        </label>
        <div className="btns">
          <button
            className="income-btn"
            onClick={(e) => addTransaction("income", e)}
          >
            Add Income
          </button>
          <button
            className="expense-btn"
            onClick={(e) => addTransaction("expense", e)}
          >
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
}

export default TransactionForm;
