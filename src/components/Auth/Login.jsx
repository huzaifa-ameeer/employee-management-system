import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">L O G I N</legend>

            <label className="label">Email</label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              type="email"
              className="input focus:border-purple-500 focus:outline-none"
              placeholder="Email"
            />

            <label className="label">Password</label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              type="password"
              className="input focus:border-purple-500 focus:outline-none"
              placeholder="Password"
            />

            <button className="btn btn-neutral mt-4 active:border-purple-500 focus:outline-none">
              Login
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
