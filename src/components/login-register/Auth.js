import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "./auth.css";

function Auth({ defaultToLogin = true }) {
  const [isLogin, setIsLogin] = useState(defaultToLogin);

  const switchToLogin = () => setIsLogin(true);
  const switchToRegister = () => setIsLogin(false);

  return (
    <div className="auth-wrapper" aria-live="polite">
      {isLogin ? (
        <Login onSwitchToRegister={switchToRegister} />
      ) : (
        <Register onSwitchToLogin={switchToLogin} />
      )}
    </div>
  );
}

export default Auth;
