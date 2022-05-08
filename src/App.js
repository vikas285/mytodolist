import React, { useState } from "react";
import "./App.css";
import List from "./Component/List";
function App() {
  const [value1, setValue] = useState("");
  const [todoValue, setTodoValue] = useState([
    {
      title: "arun",
      id: 1,
      createdAt: new Date().toLocaleString(),
      checked: false,
    },
    {
      title: "vikas",
      id: 2,
      createdAt: new Date().toLocaleString(),
      checked: false,
    },
  ]);

  const Change = (e) => {
    setValue(e.target.value);
  };

  const HandelClick = () => {
    let obj = {
      title: value1,
      id: todoValue.length + 1,
      createdAt: new Date().toLocaleString(),
      checked: false,
    };
    setTodoValue([...todoValue, obj]);
    setValue("");
  };

  const deleteItem = (id) => {
    const filteredArray = todoValue.filter((item) => {
      return item.id != id;
    });

    setTodoValue(filteredArray);
  };

  let HandelCheck = (id) => {
    const mappedArray = todoValue.map((item) => {
      if (item.id == id) {
        item.checked = !item.checked;
        return item;
      } else {
        return item;
      }
    });
    console.log(mappedArray, "===========><==========");
    setTodoValue(mappedArray);
  };
  const DeleteAll = () => {
    const DeleteAllarray = todoValue.filter((item) => {
      return item.checked == !true;
    });
    setTodoValue(DeleteAllarray);
  };

  return (
    <div className="name">
      <div>
        <button onClick={DeleteAll}>DELETE ALL</button>
      </div>
      <div className="main">
        <div className="App">
          <input
            value={value1}
            onChange={Change}
            placeholder="Write a task"
            className="input"
            type="text"
          />
          <button className="button" onClick={HandelClick}>
            create
          </button>
        </div>
        <div>
          {todoValue.map((item) => (
            <List
              name={item}
              deleteItem={deleteItem}
              HandelCheck={HandelCheck}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
