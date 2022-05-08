import React, { useState } from "react";

const List = (prop) => {
  const { name, deleteItem, HandelCheck } = prop;
  return (
    <div style={{ backgroundColor: "#4e5056", padding: 15, marginTop: 20 }}>
      <div className="List">
        <div style={{ display: "flex", alignItems: "center", width: "80%" }}>
          <button
            className={name.checked ? "checkboxTrue" : "checkbox"}
            onClick={() => HandelCheck(name.id)}
          ></button>
          <h3 className="text">{name.title}</h3>
        </div>
        <div style={{ width: "20%", justifyContent: "space-between" }}>
          <button className="delete" onClick={() => deleteItem(name.id)}>
            Delete
          </button>
          <button className="edit">Edit</button>
        </div>
      </div>
      <p style={{ color: "#fff", margin: "auto" }}>{name.createdAt}</p>
    </div>
  );
};

export default List;
