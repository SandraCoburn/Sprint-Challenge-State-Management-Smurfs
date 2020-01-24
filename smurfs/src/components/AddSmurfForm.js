import React from "react";

const AddSmurfForm = () => {
  return (
    <form>
      <input type="text" name="name" placeholder="Add name" />
      <input type="text" name="age" placeholder="Add age" />
      <input type="text" name="height" placeholder="Add height" />
      <button>Add new Smurf</button>
    </form>
  );
};
export default AddSmurfForm;
