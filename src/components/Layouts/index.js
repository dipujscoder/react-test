import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div>
      <Header expand="md" container={true} />

      {children}
      <Outlet />
    </div>
  );
}
