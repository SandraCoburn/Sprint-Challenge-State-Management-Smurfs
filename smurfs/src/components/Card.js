import React from "react";
import { connect } from "react-redux";
import { fetchSmurf, addSmurf } from "../actions";

const Card = props => {
  return (
    <div className="card">
      <h1>Smurf</h1>

      <p>Name: {props.smurf.name}</p>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    ...state
  };
};
export default connect(mapStatetoProps, { fetchSmurf })(Card);
