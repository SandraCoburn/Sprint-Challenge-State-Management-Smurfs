//reducer
const initialState = {
  smurfs: [
    {
      name: "",
      age: "",
      height: "",
      id: ""
    }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
