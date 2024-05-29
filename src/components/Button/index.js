import React from "react";
import classNames from "classnames";
import Icon from "../Icon";

export default function Button({
  children,
  to,
  icon,
  className,
  size,
  active,
  block,
  color,
  outline,
  disabled,
}) {
  if (to) {
    return (
      <a
        href={to}
        className={classNames("btn", {
          [className]: className,
          [`btn-${size}`]: size,
          [`btn-${outline ? "outline-" + color : color}`]: color,
          [`btn-${outline ? "outline-" + color : color}`]: color,
          active: active,
          "w-100": block,
        })}
        disabled={disabled}
      >
        {children}
        {icon && <Icon name={icon} />}
      </a>
    );
  } else {
    return (
      <button
        className={classNames("btn", {
          [className]: className,
          [`btn-${size}`]: size,
          [`btn-${outline ? "outline-" + color : color}`]: color,
          [`btn-${outline ? "outline-" + color : color}`]: color,
          active: active,
          "w-100": block,
        })}
        disabled={disabled}
      >
        {children}
        {icon && <Icon name={icon} />}
      </button>
    );
  }
}
