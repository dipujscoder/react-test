import React, { useState } from "react";
import Button from "../Button";

const Todos = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [id, setId] = useState(1);
  const [type, setType] = useState("add");
  const [editItem, setEditItem] = useState({});

  const handleAddTodo = () => {
    if (input.length > 0) {
      const data = {
        id,
        item: input,
        status: false,
      };

      if (type === "add") {
        setList((state) => [...state, data]);
        setInput("");
        setId((state) => state + 1);
      } else {
        const updataData = list.map((e) => {
          if (e.id === editItem.id) {
            return {
              ...e,
              item: input,
            };
          } else {
            return e;
          }
        });

        setList(updataData);
        setInput("");
        setType("add");
      }
    } else {
      setError("You have no write any text!");
    }
  };

  const handleEditTodo = (item) => {
    setInput(item.item);
    setEditItem(item);
    setType("edit");
  };
  const handleDeleteItem = (item) => {
    if (window.confirm("Delete Item?")) {
      const _updateList = list.filter((e) => e.id !== item.id);

      setList(_updateList);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>

      <div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add New Item"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="input-group-text"
            id="basic-addon1"
            onClick={handleAddTodo}
          >
            {type === "add" ? "Add" : "Edit"}
          </button>
        </div>

        {error && <p className="text-danger">{error}</p>}
      </div>

      <ul className="list-unstyled">
        {list.length > 0 &&
          list.map((e) => {
            return (
              <li className="d-flex mb-2" key={e.id}>
                <span className="mdi mdi-circle-outline me-2"></span>
                <span>{e.item}</span>
                <div className="ms-auto">
                  <Button
                    className="me-2"
                    icon="mdi-pencil"
                    size="sm"
                    color="success"
                    outline
                    click={() => handleEditTodo(e)}
                  />
                  <Button
                    icon="mdi-delete"
                    size="sm"
                    color="danger"
                    outline
                    click={() => handleDeleteItem(e)}
                  />
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Todos;
