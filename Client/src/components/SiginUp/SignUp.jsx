import { useState } from "react";
import style from "../Form/Form.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import validation from "./validation";

const SignUp = (props) => {
  const navigate = useNavigate();

  //----------Local States-------------------------------------//

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  //------------Handlers---------------------------------//

  const handleChange = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });

    validation({ userInfo, setErrors });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.signup(userInfo);
    navigate("/");
  };

  return (
    <div className={style.body}>
     
      <div>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.img}></div>

          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={userInfo.name}
            onChange={handleChange}
          />
          <p className={style.errors}>{errors.name}</p>

          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            value={userInfo.email}
            onChange={handleChange}
          />
          <p className={style.errors}>{errors.email}</p>

          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={userInfo.password}
            onChange={handleChange}
          />
          <p className={style.errors}>{errors.password}</p>

          <label htmlFor="repeatPassword">Repeat Password</label>
          <input
            name="repeatPassword"
            type="password"
            placeholder="Repeat Password"
            value={userInfo.repeatPassword}
            onChange={handleChange}
          />
          <p className={style.errors}>{errors.repeatPassword}</p>

          <button
            className={style.formButton}
            type="submit"
            disabled={
              !userInfo.email ||
              !userInfo.password ||
              !userInfo.repeatPassword ||
              errors.repeatPassword.length > 1 ||
              errors.email.length > 1 ||
              errors.password.length > 1
            }>
            Create
          </button>

          <p>you have an account? log in</p>
          <NavLink to="/">
            <button className={style.formButton}>Log In</button>
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
