import { fireEvent, getByLabelText, getByTestId } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Form from "./Form";

describe("ExpenseForm", () => {
  describe("with valid inputs", () => {
    it.todo("calls the onSubmit function", async () => {
      const mockOnSubmit = jest.fn();
      const { getByLabelText, getByRole } = render(
        <Form onSubmit={mockOnSubmit} />
      );
      await act(async () => {
        fireEvent.change(getByLabelText("Trasaction Type"), {
          target: { value: "transation" },
        });
        fireEvent.change(getByTestId("Amount"), {
          target: { value: "1234567" },
        });
        await act(async () => {
          fireEvent.click(getByRole("button"), {
            target: { value: "transation" },
          });
          expect(mockOnSubmit).toHaveBeenCalled();
        });
      });
    });
  });
});

describe("with invalid transaction type", () => {
  it.todo("render the transaction type validation error", async () => {
    const { getByTestId, container } = render(<Form />);
    await act(async () => {
      const transactionTypeInput = getByTestId("Transaction");
      fireEvent.change(transactionTypeInput("Trasaction Type"), {
        target: { value: "Invalid transaction type" },
      });
      fireEvent.blur(transactionTypeInput);
    });
    expect(container.innerHtml).toMatch("Please enter the type of expense");
  });
});

describe("with invalid amount", () => {
  it.todo("render the amount validation error", async () => {
    const { getByLabelText, container } = render(<Form />);
    await act(async () => {
      const amountInput = getByLabelText("Amount*");
      fireEvent.change(amountInput("Trasaction Type"), {
        target: { value: "Invalid amount" },
      });
      fireEvent.blur(amountInput);
    });
    expect(container.innerHtml).toMatch("Please enter the Amount");
  });
});
