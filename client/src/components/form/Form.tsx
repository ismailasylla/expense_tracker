// @ts-nocheck

import { useForm } from "react-hook-form";
import { default as api } from "../../features/apiSlice";
import TransactionButton from "../button/TransactionButton";
import { FormLabel } from "../heading";
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
            <FormLabel title={"Transaction Type"} />
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
          <FormLabel title={"Type Of Transaction"} />
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
            <FormLabel title={"Transaction Amount"} />
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
          <TransactionButton />
        </div>
      </form>
      <TransactionList></TransactionList>
    </div>
  );
};

export default Form;
