import "./Expense.css";
import ExpenseDate from "./ExpenseDate";

import React, { useState } from "react";

function ExpenseItem(props) {
  //
  const [title, subTitle] = useState(props.title);
  const clickHandler = () => {
    console.log("clicked!");
    subTitle("myName");
  };
  return (
    <div className="expense">
      <ExpenseDate date={props.date} />
      <h2>{title}</h2>
      <h3 className="expense-item">${props.item}</h3>
      <button onClick={clickHandler}>Click me</button>
    </div>
  );
}

export default ExpenseItem;
