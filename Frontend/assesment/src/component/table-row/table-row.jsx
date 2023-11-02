const TableRow = ({ item, index, onEdit }) => {
  const handleEdit = () => {
    onEdit(item);
  };
  return (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{item.description}</td>
      <td>
        <img
          width={"100px"}
          height={"100px"}
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
          alt=""
        />
      </td>
      <td className=" text-center">
        <button className="btn btn-warning" onClick={handleEdit}>
          Edit
        </button>
      </td>
      <td className=" text-center">
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;
