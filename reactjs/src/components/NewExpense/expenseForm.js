import NewExpense from "./NewExpense";

const ExpenseForm = () => {
  const saveHandler = (getData) => {
    const ExpenseData = {
      ...getData,
      id: Math.random().toString(),
    };
    console.log(ExpenseData);
  };
  return (
    <div>
      <NewExpense onSaveHandler={saveHandler}></NewExpense>
    </div>
  );
};
export default ExpenseForm;
