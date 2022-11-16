import "boxicons";

const Transaction = ({ category }) => {
  if (!category) return null;
  return (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r"
      style={{ borderRight: `8px solid ${category.color ?? "#e5e5e5"}` }}
    >
      <button className="px-3">
        <box-icon
          color={category.color ?? "#e5e5e5"}
          size="15px"
          name="trash"
        ></box-icon>
      </button>
      <span className="block w-full">{category.name ?? ""}</span>
    </div>
  );
};

export default Transaction;
