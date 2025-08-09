import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as authService from "../../services/authService";

const SignInForm = () => {
  const navigate = useNavigate();

  const [message, setMessage] = useState([""]);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await authService.signin(formData);
      props.setUser(user);
      navigate("/");
    } catch (err) {
      updateMessage(err.message);
    }
  };

  const handleChange = (event) => {
    try {
      updateMessage("");
      setFormData;
    } catch (err) {
      updateMessage(err.message);
    }
  };

  return (
    <main>
      <h1>Sign In</h1>
      <p>{message}</p>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Username:</label>
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
        <div>
          <button>Sign In</button>
          <button onClick={() => navigate("/")}>Cancel</button>
        </div>
      </form>
    </main>
  );
};
