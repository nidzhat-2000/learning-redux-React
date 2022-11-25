import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { login } from '../stores/auth';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogIn = () => {
    const dummyData = {
      id: 1,
      name: 'Nicat',
      token: '056',
    };
    // localStorage.setItem('auth', dummyData);
    dispatch(login(dummyData));
    navigate('/profile');
  };
  return (
    <div style={{ background: 'brown' }}>
      <p>firstly - Log IN ! </p>
      <button onClick={handleLogIn}>Login here</button>
    </div>
  );
}

export default Login;
