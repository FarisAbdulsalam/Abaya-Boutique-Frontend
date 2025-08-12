import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as authService from "../../services/authService";
import './SignInForm.css';

const SignInForm = (props) => {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await authService.signIn(formData);
      props.setUser(user);
      navigate("/");
    } catch (err) {
      updateMessage(err.message);
    }
  };

  const handleChange = (event) => {
    try {
      updateMessage("");
      setFormData({ ...formData, [event.target.name]: event.target.value });
    } catch (err) {
      updateMessage(err.message);
    }
  };

return (
  <main className="signin-container">
    <h1>Sign In</h1>
    <p className="signin-message">{message}</p>
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          autoComplete="off"
          id="username"
          value={formData.username}
          name="username"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={formData.password}
          name="password"
          onChange={handleChange}
          required
        />
      </div>
      <div className="signin-buttons">
        <button type="submit">Sign In</button>
        <button type="button" onClick={() => navigate("/")}>Cancel</button>
      </div>
    </form>
  </main>
);

};

export default SignInForm;
