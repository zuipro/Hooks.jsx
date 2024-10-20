import './LogIn.css';  
import React, { useState } from 'react';

const LogIn = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  // Toggle between Login and Register forms
  const handleToggle = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className={`grid-container ${isRegistering ? 'register-mode' : ''}`}>
      {/* Left Info box (Image) */}
      <div className='info-box'></div>
    <div className='psych'>
      <div className='Login-cover'>
        <div className='Login-Square'>
          <div className='form-container'>
            <h2>{isRegistering ? 'Register with Us' : 'We are Frontend Noobs'}</h2>
            <form>
              <div className='form-group'>
                <label htmlFor='email'>{isRegistering ? 'Enter your Email:' : 'Email:'}</label>
                <input type='email' id='email' name='email' required />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>{isRegistering ? 'Create a Password:' : 'Password:'}</label>
                <input type='password' id='password' name='password' required />
              </div>
              {isRegistering && (
                <div className='form-group'>
                  <label htmlFor='confirm-password'>Confirm Password:</label>
                  <input type='password' id='confirm-password' name='confirm-password' required />
                </div>
              )}
              <button type='submit'>{isRegistering ? 'Register' : 'Submit'}</button>
            </form>
            <p onClick={handleToggle} className='toggle-link'>
              {isRegistering ? 'Already have an account? Login' : 'Don’t have an account? Register'}
            </p>
          </div>
          <div/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
