import React, { useState } from "react";
const NewExpense = () => {
  const [newtitle, setNewTitle] = useState("");
  const [newNumber, setNewnumber] = useState("");
  const [newdate, setdate] = useState("");

  function titleChange(event) {
    setNewTitle(event.target.value);
  }
  function numberChange(event) {
    setNewnumber(event.target.value);
  }
  function dateChange(event) {
    setdate(event.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    const ExpenseData = {
      title: newtitle,
      Number: newNumber,
      date: new Date(newdate),
    };
    console.log(ExpenseData);
    setNewTitle("");
    setNewnumber("");
    setdate("");
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <input type="text" value={newtitle} onChange={titleChange}></input>
        </div>
        <div>
          <input type="number" value={newNumber} onChange={numberChange} />
        </div>
        <div>
          <input type="date" value={newdate} onChange={dateChange}></input>
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};
export default NewExpense;
