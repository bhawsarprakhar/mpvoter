import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton = ({ onLoginSuccess, onLoginFailure }) => {
    const clientId = '735119881647-oruodjqbhblkbeucbh072k90n9c4flno.apps.googleusercontent.com'; // Replace with your Google OAuth client ID
  
    return (
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={onLoginSuccess}
        onFailure={onLoginFailure}
        cookiePolicy={'single_host_origin'}
      />
    );
  };
  
  export default GoogleLoginButton;