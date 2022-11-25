import React from 'react';
import { useSelector } from 'react-redux';

function Counter({ num }) {
  const count = useSelector(state => state.testName.value);

  return <div>{count}</div>;
}

export default Counter;
