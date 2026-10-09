import React from 'react';

export function Login() {
  return (
    <main>
      <h2>Welcome back!</h2>

      <hr />
      <h3>Login:</h3>
      <form method="get" action="landing.html">
        <div>
            <input type="text" placeholder="Username" id="username-field"/>
            <input type="password" placeholder="Password" id="password-field"/>
        </div>
        <a href="index.html" className="special-link">Need an Account?</a>
        <button type="submit" className="btn btn-primary technical-button" id="login-button">Login</button>
      </form>
    </main>
  );
}