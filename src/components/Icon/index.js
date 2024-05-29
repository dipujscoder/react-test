import classNames from "classnames";

const Icon = ({ name }) => {
  return <span className={classNames("mdi", { [name]: name })}></span>;
};
export default Icon;
