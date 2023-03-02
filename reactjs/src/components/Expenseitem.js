import "./Expense.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const clickHandler = () => {
    console.log("clicked!");
  };
  return (
    <div className="expense">
      <ExpenseDate date={props.date} />
      <h2>{props.title}</h2>
      <h3 className="expense-item">${props.item}</h3>
      <button onClick={clickHandler}>Click me</button>
    </div>
  );
}

export default ExpenseItem;
