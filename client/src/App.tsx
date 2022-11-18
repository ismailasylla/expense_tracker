import "./App.css";
import ExpenseGraph from "./components/ExpenseGraph";
import Form from "./components/form/Form";
import MainHeading from "./components/heading/MainHeading/MainHeading";

function App() {
  return (
    <div className="App bg-slate-100">
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <MainHeading title={"Expense Tracker"} />
        <div className="grid md:grid-cols-2 gap-4">
          <ExpenseGraph />
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
