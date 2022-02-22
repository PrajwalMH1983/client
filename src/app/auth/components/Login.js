//rafc
import axios from "axios";
import { React, useState } from "react";

//dumb components
//stateless ==> hook ==>help us to maintain the state of the component
//using useState()
//useState() ==> hook is used to handle the state
//state ==> email and password
//1. useState()
//2. add event handlers
//3. print the data to console from event handlers
//4. rest call

export const Login = () => {
  //formData ==> an object which is going to hold the state of our form
  const [formData, setFormData] = useState({ email: "", password: "" });

  const [error, setError] = useState({});
  //formData.email    formData.password
  //destructuring the formData
  //const email = formData.email;
  //const password = formData.password;
  const { email, password } = formData;

  //... ==> will help u to retrieve anything which is available in that object
  //like it holds all the things available in formData
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Hello from Login");
    console.log(JSON.stringify(formData));

    axios
      .post("/api/users/login", formData)
      .then((res) => console.log(JSON.stringify(res.data)))
      .catch((err) => {
        setError(err.response.data);
        console.log(JSON.stringify(err.response.data));
      });
  };

  // axios
  //   .post("/api/users/login", newLogin)
  //   .then((res) => console.log(JSON.stringify(res.data)))
  //   .catch((err) => {
  //     console.error(JSON.stringify(err.response.data));
  //     this.setState({ errors: err.response.data });
  //   });

  // console.log(JSON.stringify(this.state));
  // const { errors } = this.state;

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Log In</h1>
            <p className="lead text-center">
              Sign in to your DevConnector account
            </p>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Email Address"
                  name="email"
                  onChange={onChange}
                />
                <div>{error.email}</div>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                  name="password"
                  onChange={onChange}
                />
                <div>{error.password}</div>
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
