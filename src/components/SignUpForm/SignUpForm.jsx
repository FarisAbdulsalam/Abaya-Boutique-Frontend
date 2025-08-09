import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as authService from "../../services/authService";

const signUpForm = (props) => {
  const navigate = useNavigate();

  const [message, setMessage] = useState([""]);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPass: "",
  });

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newUser = await authService.signup(formData);
      props.setUser(newUser.user);
      navigate("/");
    } catch (err) {
      updateMessage(err.message);
    }
  };

  const { username, password, confirmPass } = formData;

  const isFormInvalid = () => {
    return !(username && password && password === passwordConf);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          value={username}
          name="username"
          onChange={handleChange}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="text"
          value={password}
          name="password"
          onChange={handleChange}
        />
        <label htmlFor="confirm password">Confirm Password: </label>
        <input
          type="text"
          value={confirmPass}
          name="confirm password"
          onChange={handleChange}
        />
        <button disabled={isFormInvalid}>Sign Up</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </form>
    </>
  );
};

export default signUpForm;