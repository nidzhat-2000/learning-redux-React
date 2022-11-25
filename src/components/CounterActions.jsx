import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, incerement, incrementByAmount } from '../stores/counter';
import Counter from './Counter';

function CounterActions({ setNum }) {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(incerement())}>increase</button>
      <button onClick={() => dispatch(incrementByAmount(4))}>
        increase by 4
      </button>
      <button onClick={() => dispatch(decrement())}>decrease</button>
    </div>
  );
}

export default CounterActions;
