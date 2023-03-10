import FacebookLogin from 'react-facebook-login';
import React from 'react';

const FacebookButton = ({ onLoginSuccess, onLoginFailure }) => {
  const appId = 'YOUR_FACEBOOK_APP_ID';

  const handleLoginSuccess = (response) => {
    // Handle successful login
    onLoginSuccess(response);
  };

  const handleLoginFailure = (error) => {
    // Handle login failure
    onLoginFailure(error);
  };

  return (
    <FacebookLogin
      appId={appId}
      fields="name,email,picture"
      callback={handleLoginSuccess}
      onFailure={handleLoginFailure}
      render={(renderProps) => (
        <button onClick={renderProps.onClick}>
          Login with Facebook
        </button>
      )}
    />
  );
};

export default FacebookButton;
