// import logo from "./logo.svg";
// import "./App.css";
import "./components/Expenseitem";
import ExpenseItem from "./components/Expenseitem";
import ExpenseForm from "./components/NewExpense/expenseForm";

function App() {
  const expense = [
    {
      title: "Car Insurance",
      date: new Date(2020, 3, 15),
      item: "760",
    },
    {
      title: "Bank issuance",
      date: new Date(2023, 6, 25),
      item: "500",
    },
    {
      title: "Car Status",
      date: new Date(2023, 8, 15),
      item: "200",
    },
  ];

  return (
    <div className="App">
      <div>
        <ExpenseForm></ExpenseForm>
        <ExpenseItem
          title={expense[0].title}
          date={expense[0].date}
          item={expense[0].item}
        ></ExpenseItem>
        <ExpenseItem
          title={expense[1].title}
          date={expense[1].date}
          item={expense[1].item}
        ></ExpenseItem>
        <ExpenseItem
          title={expense[2].title}
          date={expense[2].date}
          item={expense[2].item}
        ></ExpenseItem>
      </div>
    </div>
  );
}

export default App;
