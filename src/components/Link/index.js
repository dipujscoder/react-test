import React from "react";
import PropTypes from "prop-types";

export default function Link({ children, to }) {
  return <a href={to}>{children}</a>;
}

Link.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string,
};
