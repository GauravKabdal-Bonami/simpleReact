import React from "react";

const Login = ({ setAuth }) => {
  return (
    <div>
      <button onClick={() => setAuth(true)}>Login</button>
    </div>
  );
};

export default Login;
