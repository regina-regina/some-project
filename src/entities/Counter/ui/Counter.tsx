import React from "react";

interface CounterProps {
  className?: string;
}

export const Counter = () => {
  const [value, setValue];
  return <div>{value}</div>;
};
