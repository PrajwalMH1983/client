import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from "../reducers";
import setAuthToken from "../../utils/setAuthToken";
//Functions we put it in curly braces

const initialState = {};
//default state for ur application

//middleware[thunk]
const middleware = [thunk];

const store = createStore(
  combineReducers,
  initialState,
  //Provide accesibility to our middleware and redux devtools(for dev env)
  //... : spread operator ==> we can use this in JSON object and arrays
  //this will read the contents of the array

  composeWithDevTools(applyMiddleware(...middleware)) //middleware specifications
);

//To get the current state
let currentState = store.getState();

//Listener --> Listens to activities or is a procedure in JS that waits for an event to occur , example -> onClick
//Subscribe(listener) --> adds a change listener , It will be called any time an action is dispatched and some part of the state tree may potentially have changed
//Subscribe listener
//getting the token (for private end points ---> without token we cant access these)

store.subscribe(() => {
  //get old or previous state
  let previousState = currentState;
  //recent one
  currentState = store.getState();

  //console.log("inside the subscriber middleware");
  //We can compare the data from 2 states
  if (previousState.auth.token !== currentState.auth.token) {
    const token = currentState.auth.token;
    //console.log("Inside subscribe");
    setAuthToken(token);
  }
  //based on that we can take a call to update the token
});

export default store;
