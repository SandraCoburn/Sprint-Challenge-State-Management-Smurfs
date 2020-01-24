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
      name: "",
      age: "",
      height: "",
      id: ""
    }
  ]
};

export const reducer = (state = initialState, action) => {
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
        smurfs: [...state.smurfs, action.payload]
      };
    default:
      return state;
  }
};
