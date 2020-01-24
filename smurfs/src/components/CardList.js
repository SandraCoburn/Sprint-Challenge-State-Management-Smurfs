import React from "react";
import Card from "./Card";

import { connect } from "react-redux";
import { fetchSmurf } from "../actions";

const CardList = props => {
  return (
    <div>
      <button onClick={props.fetchSmurf}>Get Smurfs</button>
      {props.smurfs.map((smurf, index) => (
        <Card key={smurf.id} smurf={smurf} />
      ))}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    ...state
  };
};
export default connect(mapStateToProps, { fetchSmurf })(CardList);