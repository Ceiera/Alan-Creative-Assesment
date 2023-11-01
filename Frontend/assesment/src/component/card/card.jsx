import { useState } from "react";
const Card = ({ item, index, onAdd }) => {

  const handleAdd = (e) => {
    e.preventDefault()
    onAdd(item)
  }


  return (
    <div onClick={handleAdd} key={index} className="card d-flex flex-column rounded-3 gap-1">
      <img
        width={`150px`}
        height={`150px`}
        src={item.image}
        alt={item.description + "img"}
      />
      <div className="align-self-center">{item.description}</div>
    </div>
  );
};

export default Card