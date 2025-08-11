import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as authService from "../../services/authService";
import './SignUpForm.css'

const SignUpForm = (props) => {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPass: "",
  });

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  const handleChange = (event) => {
    setMessage("");
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newUser = await authService.signUp(formData);
      props.setUser(newUser);
      navigate("/");
    } catch (err) {
      updateMessage(err.message);
    }
  };

  const { username, password, confirmPass } = formData;

  const isFormInvalid = () => {
    return !(username && password && password === confirmPass);
  };

  return (
    <main className="signup-container">
      <h1>Sign Up</h1>
      <p className="signup-message">{message}</p>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          name="username"
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          name="password"
          onChange={handleChange}
          required
        />
        <label htmlFor="confirmPass">Confirm Password:</label>
        <input
          type="password"
          id="confirmPass"
          value={confirmPass}
          name="confirmPass"
          onChange={handleChange}
          required
        />
        <div className="signup-buttons">
          <button type="submit" disabled={isFormInvalid()}>
            Sign Up
          </button>
          <button type="button" onClick={() => navigate("/")}>
            Cancel
          </button>
        </div>
      </form>
    </main>
  );
};

export default SignUpForm;
