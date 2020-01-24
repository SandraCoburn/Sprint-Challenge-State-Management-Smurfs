import axios from "axios";

export const FETCHING_SMURF_START = "FETCHING_SMURF_START";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const FETCHING_SMURF_FAIL = "FETCHING_SMURF_FAIL";
export const ADDING_SMURF_START = "ADDING_SMURF_START";
export const ADDING_SMURF_SUCCESS = "ADDING_SMURF_SUCCESS";
export const ADDING_SMURF_FAIL = "ADDING_SMURF_FAIL";

// action FETCCH creator:
export const fetchSmurf = () => dispatch => {
  dispatch({ type: FETCHING_SMURF_START });
  axios.get("http://localhost:3333/smurfs").then(res => {
    dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data });
  });
};

//action ADD creator:
export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADDING_SMURF_START });
  axios.post("http://localhost:3333/smurfs", smurf).then(res => {
    dispatch({ type: ADDING_SMURF_SUCCESS, payload: res.data });
  });
};
