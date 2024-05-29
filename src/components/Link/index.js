import React from "react";

export default function Link({ children, to }) {
  return <a href={to}>{children}</a>;
}
