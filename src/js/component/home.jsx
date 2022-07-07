import React from "react";
import PropTypes from "prop-types";

const Contadorsimple = (props) => {
  return (
    <div className="contador">
      <div >
        <i className="far fa-clock"></i>
      </div>
      <div>{props.cuartonumero % 365}</div>
      <div>{props.tercernumero % 24}</div>
      <div>{props.segundonumero % 60}</div>
      <div>{props.primernumero % 60}</div>
    </div>
  );
};

Contadorsimple.propTypes = {
  cuartonumero: PropTypes.number,
  tercernumero: PropTypes.number,
  segundonumero: PropTypes.number,
  primernumero: PropTypes.number,
};
export default Contadorsimple;
