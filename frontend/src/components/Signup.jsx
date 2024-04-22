import { useState } from "react";
import { BASE_URL } from "../config";
import { useNavigate } from "react-router-dom";
import "../style/signup.css";
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
      role: role,
      username: username,
    };
    fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((response) => {
      if (response.status === 200) {
        navigate("/signin");
      }
    });
  };
  return (
    <div className="wrapper">
      <h1>Hello Again!</h1>
      <p>Welcome back you've</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="admin">Admin</option>
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
        </select>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="signupbutton">
          Sign U
        </button>
      </form>
    </div>
  );
}
