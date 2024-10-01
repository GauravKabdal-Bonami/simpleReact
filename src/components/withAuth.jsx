import React from "react";
import Login from "./Login";

const withAuth = (Component) => {
  return (props) => {
    if (props.auth) {
      return <Component {...props} />;
    } else {
      return (
        <div>
          <p>Not accessible !</p>
          <Login {...props} />
        </div>
      );
    }
  };
};

export default withAuth;
