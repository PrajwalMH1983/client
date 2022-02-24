import { SET_ALERT, REMOVE_ALERT } from "../../../redux/types/alertTypes";

//We have multiple errors
const initialState = [];

//uuid package helps us to generate the automatic id's
export default (state = initialState, action) => {
  const { type, payload } = action;
  //this payload brings JSON object.
  console.log(payload);
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      //payload will bring the id ==> based on id (unique in nature)
      return state.filter((alert) => alert.id !== payload);

    default:
      return state;
  }
};
