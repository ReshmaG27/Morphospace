import React, { useState } from 'react';
import './passVerify.css';

const ChangePasswordApp = () => {
  const [showVerification, setShowVerification] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleOtpChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  };

  const handleVerifyOtp = () => {
    // TO DO: implement OTP verification logic
    console.log(otp.join(''));
  };

  const handleChangePassword = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setShowVerification(true);
  };

  return (
    <div className="container">
      <h2 className="title">Change Password</h2>
      <form>
        <div className="form-group">
          <label className="label" htmlFor="password">
            New Password
          </label>
          <input
            className="input"
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="confirmPassword">
            Confirm New Password
          </label>
          <input
            className="input"
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button
          className="button"
          type="button"
          onClick={handleChangePassword}
        >
          Change Password
        </button>
      </form>
      {showVerification && (
        <div className="mt-4">
          <h2 className="title">Verify OTP</h2>
          <form>
            <div className="otp-container">
              {otp.map((_, index) => (
                <input
                  key={index}
                  className="otp-input"
                  type="text"
                  maxLength={1}
                  value={otp[index]}
                  onChange={(e) => handleOtpChange(e, index)}
                />
              ))}
            </div>
            <button
              className="button"
              type="button"
              onClick={handleVerifyOtp}
            >
              Verify OTP
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChangePasswordApp;
