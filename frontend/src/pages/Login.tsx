import Login from '@react-login-page/page6';
import React from 'react';

interface LoginStyles extends React.CSSProperties {
  '--login-bg'?: string;
  '--login-color'?: string;
  '--login-input'?: string;
  '--login-input-bg'?: string;
  '--login-inner-before'?: string;
  '--login-inner-after'?: string;
  '--login-btn'?: string;
  '--login-btn-bg'?: string;
  '--login-btn-focus'?: string;
  '--login-btn-hover'?: string;
  '--login-btn-active'?: string;
  '--login-footer'?: string;
}

const css: LoginStyles = {
  '--login-bg': '#34265B',
  '--login-color': '#fff',
  '--login-input': '#333',
  '--login-input-bg': '#fff',
  '--login-inner-before': 'linear-gradient(#3ee4f0, #0b94ef)',
  '--login-inner-after': 'linear-gradient(to right, #fff62f, #ffa204)',
  '--login-btn': '#fff',
  '--login-btn-bg': '#000000',
  '--login-btn-focus': '#000000',
  '--login-btn-hover': '#2F2F30',
  '--login-btn-active': '#000000',
  '--login-footer': '#ffffff99',
};

const LoginPage = () => {
  return(
    <div className='min-w-screen min-h-screen flex justify-center'>
        <Login style={css} className='w-screen'/>;
    </div>
  )
}

export default LoginPage;