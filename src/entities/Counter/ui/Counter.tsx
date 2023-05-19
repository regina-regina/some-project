/* eslint-disable i18next/no-literal-string */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button";
import { counterActions } from "../model/slice/CounterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{`value = ${counterValue}`}</h1>
      <Button data-testid="increment-button" onClick={incrementHandler}>
        increment
      </Button>
      <Button data-testid="decrement-button" onClick={decrementHandler}>
        decrement
      </Button>
    </div>
  );
};
