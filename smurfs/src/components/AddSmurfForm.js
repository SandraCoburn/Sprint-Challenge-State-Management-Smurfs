import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

const AddSmurfForm = props => {
  console.log("form props", props);
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: Date.now()
  });

  const handleChanges = event => {
    setNewSmurf({
      ...newSmurf,
      [event.target.name]: event.target.value
    });
  };
  return (
    <form autoComplete="off">
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" onChange={handleChanges} />
      <label htmlFor="age">Age:</label>
      <input type="text" name="age" onChange={handleChanges} />
      <label htmlFor="height">Height:</label>
      <input type="text" name="height" onChange={handleChanges} />
      <button type="button" onClick={() => props.addSmurf(newSmurf)}>
        Add new Smurf
      </button>
    </form>
  );
};

const mapStatetoProps = state => {
  return {
    ...state
  };
};

export default connect(mapStatetoProps, { addSmurf })(AddSmurfForm);
