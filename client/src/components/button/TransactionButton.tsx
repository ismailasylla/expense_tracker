import React from "react";
// Props checker for styled component, will refactore later...
interface Props {
  hasBackgroundColor?: string;
}

function TransactionButton({ hasBackgroundColor }: Props) {
  return (
    <div className="submit-btn">
      <button className="border py-2 text-white bg-slate-800 w-full">
        Make Transaction
      </button>
    </div>
  );
}

export default TransactionButton;
