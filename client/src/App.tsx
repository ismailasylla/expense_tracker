import "./App.css";
import ExpenseGraph from "./components/ExpenseGraph";
import Form from "./components/form/Form";

function App() {
  return (
    <div className="App bg-slate-100">
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">
          Expense Tracker
        </h1>
        <div className="grid md:grid-cols-2 gap-4">
          <ExpenseGraph />
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
