//rcc
import { React, useState } from "react";
import axios from "axios";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [error, setError] = useState({});

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Hello from Register");
    console.log(JSON.stringify(formData));

    // axios
    //   .post("/api/users/register", formData)
    //   .then((res) => console.log(JSON.stringify(res.data)))
    //   .catch((err) => {
    //     setError(err.response.data);
    //     console.log(JSON.stringify(err.response.data));
    //   });
  };

  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Sign Up</h1>
            <p className="lead text-center">Create your DevConnector account</p>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Name"
                  name="name"
                  //value={this.state.name}
                  onChange={onChange}
                  required
                />
                <div>{error.name}</div>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Email Address"
                  name="email"
                  onChange={onChange}
                  //value={this.state.email}
                />
                <div>{error.email}</div>
                <small className="form-text text-muted">
                  This site uses Gravatar so if you want a profile image, use a
                  Gravatar email
                </small>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                  name="password"
                  onChange={onChange}
                  //value={this.state.password}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Confirm Password"
                  name="password2"
                  onChange={onChange}
                  //value={this.state.password2}
                />
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default class Register extends Component {
//   //registerState is a JSON object.
//   //Axios is a library which help us to perform the rest call.
//   //Axios provides an easy to use API in a compact package for most of your http
//   //communication needs. However if you prefer to stick with native API's nothing stops you from implementing Axio's features.
//   constructor() {
//     super();
//     this.state = {
//       name: "guldu",
//       email: "",
//       password: "",
//       password2: "",
//       errors: {},
//     };
//   }

//   onChange = (e) => {
//     console.log(e.target.name + " : " + e.target.value);
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   onSubmit = (e) => {
//     //Cancels th event if it is cancellable , meaning that the
//     //default action that belongs to the event will not occur
//     e.preventDefault();
//     console.log("Submit Called");
//     console.log(JSON.stringify(this.state));

//     const newUser = {
//       name: this.state.name,
//       email: this.state.email,
//       password: this.state.password,
//       password2: this.state.password2,
//     };

//     //Then() --> catches your success part
//     //catch() --> catches your failure part
//     axios
//       .post("/api/users/register", newUser)
//       .then((res) => console.log(JSON.stringify(res.data)))
//       .catch((err) => {
//         console.log(JSON.stringify(err.response.data));
//         this.setState({ errors: err.response.data });
//       });
//   };
//   render() {
//     console.log(JSON.stringify(this.state));
//     //this is called destructuring
//     //const errors = this.state.errors
//     const { errors } = this.state;

//     return (
//       <div className="register">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-8 m-auto">
//               <h1 className="display-4 text-center">Sign Up</h1>
//               <p className="lead text-center">
//                 Create your DevConnector account {this.state.errors.email}
//               </p>
//               <form onSubmit={this.onSubmit}>
//                 <div className="form-group">
//                   <input
//                     type="text"
//                     className="form-control form-control-lg"
//                     placeholder="Name"
//                     name="name"
//                     value={this.state.name}
//                     onChange={this.onChange}
//                     required
//                   />
//                   <div>{errors.name}</div>
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="email"
//                     className="form-control form-control-lg"
//                     placeholder="Email Address"
//                     name="email"
//                     onChange={this.onChange}
//                     value={this.state.email}
//                   />
//                   <div>{errors.email}</div>
//                   <small className="form-text text-muted">
//                     This site uses Gravatar so if you want a profile image, use
//                     a Gravatar email
//                   </small>
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="password"
//                     className="form-control form-control-lg"
//                     placeholder="Password"
//                     name="password"
//                     onChange={this.onChange}
//                     value={this.state.password}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="password"
//                     className="form-control form-control-lg"
//                     placeholder="Confirm Password"
//                     name="password2"
//                     onChange={this.onChange}
//                     value={this.state.password2}
//                   />
//                 </div>
//                 <input type="submit" className="btn btn-info btn-block mt-4" />
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
