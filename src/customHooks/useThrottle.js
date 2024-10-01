import { useCallback, useRef } from "react";

const useThrottle = (callback, limit) => {
  const lastCall = useRef(Date.now());

  return (...args) => {
    const now = Date.now();
    console.log("clicked normal");
    if (now - lastCall.current >= limit) {
      callback(...args);
      console.log("throttled click");
      lastCall.current = now;
    }
  };
};

export default useThrottle;
