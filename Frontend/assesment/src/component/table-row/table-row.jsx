import { useState } from "react";

const TableRow = ({ item, index, onEdit, onDelete }) => {
  const handleEdit = () => {
    onEdit(item);
  };

  const handleDelete = async () => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/fooditems/${item.foodItemsId}`, {
      method: "DELETE",
    })
    const data = await response.json()
    onDelete()
  }
  return (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{item.description}</td>
      <td>{item.price}</td>
      <td>
        <img
          width={"100px"}
          height={"100px"}
          src={item.image}
          alt=""
        />
      </td>
      <td className=" text-center">
        <button className="btn btn-warning" onClick={handleEdit}>
          Edit
        </button>
      </td>
      <td className=" text-center">
        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;
