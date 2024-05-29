import React from "react";
import classNames from "classnames";
import Icon from "../Icon";

export default function Button({ children, to, icon }) {
  if (to) {
    return (
      <a href={to} className={classNames("btn")}>
        {children}
        {icon && <Icon name={icon} />}
      </a>
    );
  } else {
    return (
      <button className={classNames("btn")}>
        {children}
        {icon && <Icon name={icon} />}
      </button>
    );
  }
}
