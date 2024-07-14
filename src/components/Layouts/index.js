import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <Header expand="md" container={true} />

      {children}
      <Outlet />
    </>
  );
}
