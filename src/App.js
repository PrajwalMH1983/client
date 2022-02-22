import logo from "./logo.svg";
import "./App.css";
import Header from "./app/core/components/layouts/Header";
import Landing from "./app/core/components/layouts/Landing";
import Footer from "./app/core/components/layouts/Footer";
//imrr
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./app/auth/components/Register";
import { Login } from "./app/auth/components/Login";
import { AuthRouters } from "./app/auth/routings/AuthRouters";
import { Provider } from "react-redux";
import store from "./redux/store";
import DashboardRouter from "./app/dashboard/routings/DashboardRouter";
import { useEffect } from "react";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./app/auth/action/authAction";

//integation of react and redux.
//Routing scope should be applied to the entire application
/*This <Routes> </Routes> will work as a switch case*/
function App() {
  //it should do some fundamental checks for token
  // useEffect(() => {
  //   if (localStorage.token) {
  //     setAuthToken(localStorage.token);
  //   }
  //   //we need to update the user info.
  //   store.dispatch(loadUser());
  // }, []);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuthToken(localStorage.getItem("token"));
      store.dispatch(loadUser());
    }
  }, []);

  return (
    //Scope of our application
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Landing></Landing>}></Route>
            <Route path="/auth/*" element={<AuthRouters></AuthRouters>}></Route>
            <Route
              path="/dashboard/*"
              element={<DashboardRouter></DashboardRouter>}
            ></Route>
          </Routes>
          <Footer></Footer>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
