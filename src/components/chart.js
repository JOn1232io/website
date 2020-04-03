import React from "react";
import PropTypes from "prop-types";

const Chart = ({ children, caption, className, style }) => (
  <div className={`${className || ""} chart flex flex-col`} style={style}>
    <div className="flex-1">{children}</div>
    <div className="bg-dark text-light text-center p-3">{caption}</div>
  </div>
);

Chart.propTypes = {
  children: PropTypes.object.isRequired,
  caption: PropTypes.string,
};

export default Chart;
