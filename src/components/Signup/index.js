import React, { useState, useContext } from "react";
import ironman from "../../images/ironman.png";
import { FirebaseContext } from "../Firebase";

function Signup() {
  const firebase = useContext(FirebaseContext);

  const data = {
    pseudo: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [loginData, setLoginData] = useState(data);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .signupUser(loginData.email, loginData.password)
      .then((user) => {
        setLoginData({ ...data });
      })
      .catch((error) => {
        setError(error);
      });
  };

  const btn =
    loginData.pseudo === "" ||
    loginData.email === "" ||
    loginData.password === "" ||
    loginData.confirmPassword === "" ? (
      <button disabled>Register</button>
    ) : (
      <button>Register</button>
    );

  // error management
  const errorMsg = error !== "" && <span>{error.message}</span>;

  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeft">
          <img src={ironman} alt="Ironman"></img>
        </div>
        <div className="formBoxRight">
          <div className="formContent">
            {errorMsg}
            <h2>Inscription</h2>
            <form onSubmit={handleSubmit}>
              <div className="inputBox">
                <input
                  onChange={handleChange}
                  type="text"
                  id="pseudo"
                  autoComplete="off"
                  required
                  value={loginData.pseudo}
                ></input>
                <label htmlFor="pseudo">Pseudo</label>
              </div>
              <div className="inputBox">
                <input
                  onChange={handleChange}
                  type="email"
                  id="email"
                  autoComplete="off"
                  required
                  value={loginData.email}
                ></input>
                <label htmlFor="email">Email</label>
              </div>
              <div className="inputBox">
                <input
                  onChange={handleChange}
                  type="password"
                  id="password"
                  autoComplete="off"
                  required
                  value={loginData.password}
                ></input>
                <label htmlFor="password">Password</label>
              </div>
              <div className="inputBox">
                <input
                  onChange={handleChange}
                  type="password"
                  id="confirmPassword"
                  autoComplete="off"
                  required
                  value={loginData.confirmPassword}
                ></input>
                <label htmlFor="confirmPassword">Password</label>
              </div>
              {btn}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
