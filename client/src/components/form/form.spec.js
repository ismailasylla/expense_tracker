import { render, screen } from "@testing-library/react";
import Form from "./Form";

test("transaction type input field should be rendered", () => {
  render(<Form />);
  const transactionTypeInputEl = screen.getAllByPlaceholderText(
    /Salary, House Rend, SIP/i
  );
  expect(transactionTypeInputEl).toBeInTheDocument();
});

test("amount input field should be rendered", () => {
  render(<Form />);
  const amountInputEl = screen.getAllByPlaceholderText(/amount/i);
  expect(amountInputEl).toBeInTheDocument();
});

test("transaction button should be rendered", () => {
  render(<Form />);
  const buttonEl = screen.getAllByRole(/button/i);
  expect(buttonEl).toBeInTheDocument();
});
