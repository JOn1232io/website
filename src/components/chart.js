import React from "react";
import PropTypes from "prop-types";

const Chart = ({ children, caption }) => (
  <div className="chart">
    <div>{children}</div>
    <div className="bg-highlight text-highlight">{caption}</div>
  </div>
);

Chart.propTypes = {
  children: PropTypes.object.isRequired,
  caption: PropTypes.string,
};

export default Chart;
