import React from "react";
import { useDispatch } from "react-redux";

import { RemoveTransactions } from "../redux/actions/DeleteAction";

export const Transaction = ({ transaction }) => {
  const deleteTransaction = useDispatch();

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(RemoveTransactions(transaction.id))}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
