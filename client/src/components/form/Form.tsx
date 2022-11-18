// @ts-nocheck

import { useForm } from "react-hook-form";
import { default as api } from "../../features/apiSlice";
import TransactionList from "../transaction/TransactionList";

const Form = () => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();
  const [addTransaction] = api.useAddTransactionMutation();

  const onSubmit = async (data) => {
    if (!data) return {};
    await addTransaction(data).unwrap();
    resetField("name");
    resetField("amount");
  };

  return (
    <div className="form max-w-sm mx-auto w-96">
      <h1 className="font-bold pb-4 text-xl">Transaction</h1>
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="input-group">
            <label htmlFor="transaction">Transaction Type</label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Salary, House Rend, SIP"
              className="form-input"
              id="Transaction"
            />
          </div>
          <span className="text-red-700 px-4 py-3">
            {errors.name?.type === "required" &&
              "Please enter the type of expense"}
          </span>
          <label htmlFor="transaction">Type Of Transaction</label>
          <select
            className="form-input"
            {...register("type", { required: true })}
          >
            <option value="Expense" defaultValue>
              Expense
            </option>
            <option value="Income">Income</option>
            <option value="Investment">Investment</option>
            <option value="Savings">Savings</option>
          </select>
          <div className="input-group">
            <label htmlFor="transaction">Transaction Amount</label>
            <input
              type="number"
              {...register("amount", { required: true })}
              placeholder="amount"
              className="form-input"
              id="Amount"
            />
          </div>
          <span className="text-red-700 px-4 py-3">
            {errors.amount?.type === "required" && "Please enter the Amount"}
          </span>
          <div className="submit-btn">
            <button className="border py-2 text-white bg-slate-800 w-full">
              Make Transaction
            </button>
          </div>
        </div>
      </form>
      <TransactionList></TransactionList>
    </div>
  );
};

export default Form;
