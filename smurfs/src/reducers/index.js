//reducer
import {
  FETCHING_SMURF_START,
  FETCHING_SMURF_SUCCESS,
  FETCHING_SMURF_FAIL,
  ADDING_SMURF_START,
  ADDING_SMURF_SUCCESS,
  ADDING_SMURF_FAIL
} from "../actions";

const initialState = {
  isLoading: false,

  smurfs: [
    {
      name: "Smurfette",
      age: "200",
      height: "5cm",
      id: 2
    }
  ]
};

export const reducer = (state = initialState, action) => {
  console.log("payload", action.payload);
  switch (action.type) {
    case FETCHING_SMURF_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCHING_SMURF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: state.smurfs.concat(action.payload)
      };
    case ADDING_SMURF_START:
      return {
        ...state
      };
    case ADDING_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload
      };

    default:
      return state;
  }
};
