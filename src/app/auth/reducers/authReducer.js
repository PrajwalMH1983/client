//rxreducer
import {
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_SUCCESS,
} from "../../../redux/types/userTypes";
const initialState = {
  user: null,
  isAuthenticated: false,
  loading: true,
  token: localStorage.getItem("token"), //we will set this token into localStorage after successful login.
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case REGISTER_SUCCESS:
      return { ...state, ...payload, isAuthenticated: true, loading: false };
    case LOGIN_SUCCESS:
      return { ...state, ...payload, isAuthenticated: true, loading: false };
    //once the registration is done our registration API is going to return a token , if we get the token as a payload then authentication is true , we just received the newly created token
    //we use the loading flag to stop the loading of the image
    //This is a json object to store and update the store content as per the new payload.

    default:
      return state;
  }
};
