//Register user
import axios from "axios";
import { REGISTER_SUCCESS, USER_LOADED } from "../../../redux/types/userTypes";
import api from "../../../utils/api";
//our actions are asynchronous in nature
//when requests are coming in random manner there is no order.
//dispatch will connect u to the thunk internally
export const register = (formData) => async (dispatch) => {
  try {
    //await will wait until and unless we are getting response from the post method
    const res = await api.post("/users", formData);

    //success

    //dispatch will connect u to the middleware and the middleware will connect u to store via reducers
    //Internally this info will be provided to your combineReducers and this will check in which reducer we have REGISTER_SUCCESS.
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (err) {
    //failure
  }
};

//load User ===> load the user info.

export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get("/auth");
    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {}
};
