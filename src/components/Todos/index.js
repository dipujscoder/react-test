import React from "react";
import Button from "../Button";

export default function Todos() {
  return (
    <div>
      <h1>Todo List</h1>

      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Add Todo" />
        <button className="input-group-text" id="basic-addon1">
          Add
        </button>
      </div>

      <ul className="list-unstyled">
        <li className="d-flex">
          <span className="mdi mdi-circle-outline me-2"></span>
          <span>One</span>
          <Button
            className="ms-auto"
            icon="mdi-delete"
            size="sm"
            block
            color="success"
            disabled
          />
        </li>
      </ul>
    </div>
  );
}
