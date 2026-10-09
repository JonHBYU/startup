import React from 'react';

export function Register() {
  return (
    <main>
      <h2>Welcome!</h2>

      <hr />
      <h3>Register:</h3>
      <form method="get" action="landing.html">
        <div>
            <input type="text" placeholder="Username" id="username-field"/>
            <input type="password" placeholder="Password" id="password-field"/>
        </div>
        <a href="login.html" class="special-link">Already Have an Account?</a>
        <button type="submit" class="btn btn-primary technical-button" id="register-button">Register</button>
      </form>
    </main>
  );
}