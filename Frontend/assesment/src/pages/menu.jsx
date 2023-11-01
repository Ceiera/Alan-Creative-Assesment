import { useState, useEffect } from "react";
import Card from "../component/card/card";
import "./menu.css";

const Menu = () => {
  const [listFoodItems, setListFoodItems] = useState("");
  const [count, setCount] = useState(0);
  const [calculateBillList, setCalculateBillList] = useState([]);
  const [totalBill, setTotalBill] = useState(0);
  useEffect(() => {
    const loadList = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}api/fooditems`
      );
      const data = await response.json();

      setListFoodItems(data.data);
    };
    loadList();
  }, []);

  const addCalculateBill = (item) => {
    const index = calculateBillList.findIndex(
      (x) => x.foodItemsId === item.foodItemsId
    );
    console.log(listFoodItems)
    if (index === -1) {
      let newAssign = item
      newAssign.quantity = 1
      setCalculateBillList([ newAssign, ...calculateBillList ]);
      setTotalBillHandler();
    } else {
      calculateBillList[index].quantity += 1;
      setCalculateBillList([...calculateBillList]);
      setTotalBillHandler();
    }
    
    console.log(calculateBillList);
  };

  const setTotalBillHandler = () => {
    let total = 0;
    calculateBillList.forEach((item) => {
      total += item.quantity * item.price;
    });
    setTotalBill(total);
  };

  const clearCalculateBill = () => {
    setCalculateBillList([]);
    setTotalBill(0);
  };

  return (
    <div className="menu  bg-body-tertiary">
      <div className="d-flex flex-row px-5 py-3 gap-5">
        <div className="left d-flex flex-wrap gap-3">
          {listFoodItems
            ? listFoodItems.map((item, index) => {
                return (
                  <Card item={item} key={index} onAdd={addCalculateBill}></Card>
                );
              })
            : ""}
        </div>
        <div className="right d-flex flex-column row-gap-3">
          <div className="customer justify-content-between w-100">Customer</div>
          <div className="reservation align-self-center bg-white w-100 text-center">
            Dine In
          </div>
          <div className="calculate-bill d-flex flex-column row-gap-3 bg-white w-100">
            <div className="d-flex flex-row justify-content-between bg-body-white w-100">
              <div>1</div>
              <div>
                <a href="#">View Table</a>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-between row-gap-1 overflow-y-auto overflow-x-hidden">
              {calculateBillList
                ? calculateBillList.map((item, index) => {
                    return (
                      <div key={index} className="row">
                        <div className="col-6">{item.description}</div>
                        <div className="col-1 text-end">x{item.quantity}</div>
                        <div className="col-5 text-end">
                          Rp.{" "}
                          {(item.quantity * item.price).toLocaleString(
                            "id-ID",
                            { currency: "IDR", minimumFractionDigits: 0 }
                          )}
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
            <div
              className="clear-sale text-center btn btn-disabled"
              onClick={clearCalculateBill}
            >
              {" "}
              Clear Sale{" "}
            </div>
          </div>
          <div className="row w-100">
            <div className="col-6 text-center">Save Bill</div>
            <div className="col-6 text-center">Print Bill</div>
          </div>
          <div className="row">
            <div className="col-4 btn btn primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-layout-split"
                viewBox="0 0 16 16"
              >
                <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm8.5-1v12H14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H8.5zm-1 0H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h5.5V2z" />
              </svg>
            </div>
            <div className="btn btn-primary col-8">Charge Rp. {totalBill}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
