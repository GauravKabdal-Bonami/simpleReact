import React from "react";
import withAuth from "./withAuth";
import { useFetch } from "../customHooks/useFetch";
import useThrottle from "../customHooks/useThrottle";
const Home = ({ auth, setAuth }) => {
  const [finalData, fetchError] = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  console.log(finalData);

  const handleClick = () => {
    console.log("clicked");
  };

  const throttledClick = useThrottle(handleClick, 2000);
  return (
    <div>
      Home
      <button onClick={throttledClick}>Click</button>
    </div>
  );
};

export default Home;
