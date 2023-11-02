import { useContext, useEffect, useState } from "react";
import Modals from "../component/modal/modal";
import TableRow from "../component/table-row/table-row";

const Dashboard = () => {
  const [listFoodItems, setListFoodItems] = useState([]);
  const [modalOn, setModalOn] = useState(false);
  const [dataPreview, setDataPreview] = useState({});
  useEffect(() => {
    loadList();
  }, []);

  const loadList = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}api/fooditems`
    );
    const data = await response.json();
    setListFoodItems(data.data);
  };

  const closeModal = () => {
    setModalOn(false);
  };
  const handleAdd = (item) => {
    setDataPreview(item);
    setModalOn(true);
  };

  const handleEdit = (params) => {
    setDataPreview(params);
    setModalOn(true);
  };

  const handleDelete = (item) => {};

  return (
    <div className="px-3 py-2 bg-body-tertiary">
      <h1>List Food Items</h1>
      <div className="btn btn-primary mt-3">Add Food Item</div>
      <div
        className="food-items-containe mt-3"
        style={{ height: "26rem", overflowY: "auto" }}
      >
        <table className="table">
          <thead>
            <tr>
              <td scope="col">No.</td>
              <td scope="col">Description</td>
              <td scope="col">Image</td>
              <td scope="col" className="text-center" colSpan={"2"}>
                Action
              </td>
            </tr>
          </thead>
          <tbody className="">
            {listFoodItems.map((item, index) => {
              return (
                <TableRow
                key={index}
                  item={item}
                  index={index}
                  onEdit={handleEdit}
                  onDelete={loadList}
                ></TableRow>
              );
            })}
          </tbody>
        </table>
      </div>

      <Modals
        show={modalOn}
        item={dataPreview}
        handlerClose={closeModal}
      ></Modals>
    </div>
  );
};

export default Dashboard;
