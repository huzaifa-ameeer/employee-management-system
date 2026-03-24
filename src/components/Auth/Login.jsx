import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">L O G I N</legend>

          <label className="label">Email</label>
          <input type="email" className="input focus:border-purple-500 focus:outline-none" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" className="input focus:border-purple-500 focus:outline-none" placeholder="Password" />

          <button className="btn btn-neutral mt-4 active:border-purple-500 focus:outline-none">Login</button>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;
