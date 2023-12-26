import React from 'react';
// import "./SignIn.css";

export default function SignIn() {
  return (
    <div>
        <form class="canvasOnForm">
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" className="canvasOnInput"/><br/>
                <label for="password">Password:</label>
                <input type="password" name="password" id="password" className="canvasOnInput"/><br/>
                <input type="submit" class="submitButton"/>
        </form>
    </div>
  )
}
