import React from "react";
import Button from "../Button";

export default function Todos() {
  return (
    <div>
      <h1>Todo List</h1>

      <ul className="list-unstyled">
        <li className="d-felx">
          <span className="mdi mdi-circle-outline me-2"></span>
          One
          <Button icon="mdi-delete" />
        </li>
      </ul>
    </div>
  );
}
