import React from "react";
import Card from "./Card";

import { connect } from "react-redux";
import { fetchSmurf } from "../actions";

const CardList = props => {
  return (
    <div>
      <button onClick={props.fetchSmurf}>Get Smurfs</button>
      {!props.smurfs && !props.isLoading && <h2> Get another Smurf!</h2>}
      {props.smurfs.map(smurf => {
        <Card key={smurf.id} smurf={smurf} />;
      })}

      <p>New smurf</p>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};
export default connect(mapStateToProps, { fetchSmurf })(CardList);
