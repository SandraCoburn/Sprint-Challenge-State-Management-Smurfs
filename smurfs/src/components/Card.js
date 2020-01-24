import React from "react";
import { connect } from "react-redux";
import { fetchSmurf, addSmurf } from "../actions";

const Card = props => {
  return (
    <div className="card">
      <p>{props.smurf}</p>
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    ...state
  };
};
export default connect(mapStatetoProps, { fetchSmurf })(Card);
