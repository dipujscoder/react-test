import React from "react";
import classNames from "classnames";
import Icon from "../Icon";
import PropTypes from "prop-types";

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
  click,
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
        onClick={click}
      >
        {children}
        {icon && <Icon name={icon} />}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  color: PropTypes.string,
  outline: PropTypes.string,
  click: PropTypes.func,
};
