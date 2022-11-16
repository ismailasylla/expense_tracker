import Transaction from "./Transaction";

const TransactionList = () => {
  const obj = [
    {
      name: "Savings",
      color: "#f9c74f",
    },
    {
      name: "Investment",
      color: "#f9c74f",
    },
    {
      name: "Expense",
      color: "rgb(54, 162, 235)",
    },
  ];
  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">History</h1>
      {obj.map((v, i) => (
        <Transaction key={i} category={v}></Transaction>
      ))}
    </div>
  );
};

export default TransactionList;
