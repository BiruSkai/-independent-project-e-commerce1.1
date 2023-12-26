import React from 'react';
import "./SignUp.css";

export default function SignUp() {
  return (
    <div>
        <form class="canvasOnForm">
                
                <label for="title">Title:</label>
                <input type="text" name="title" id="title" className="canvasOnInput"/><br/>
                <label for="fullname">Fullname:</label>
                <input type="text" name="fullname" id="fullname" className="canvasOnInput" required/><br/>
                <label for="gender">Gender:</label>
                <select name="gender" id="gender" className="canvasOnInput">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                </select><br/>
                <label for="birthdate">Birthdate:</label>
                <input type="date" name="birthdate" id="birthdate" className="canvasOnInput"/><br/>
                <label for="telephone">Telephone:</label>
                <input type="telephone" name="telephone" id="telephone" className="canvasOnInput"/><br/>
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" className="canvasOnInput" required/><br/>
                <label for="password">Password:</label>
                <input type="password" name="password" id="password" className="canvasOnInput" required/><br/>
                <label for="passwordCheck">Reenter password:</label>
                <input type="password" name="passwordCheck" id="passwordCheck" className="canvasOnInput" required/><br/>
                <label for="userType" className="canvasOnInput">User type:</label>
                <select name="userType" id="userType" className="canvasOnInput">
                        <option value="buyer" default>Buyer</option>
                        <option value="seller">Seller</option>
                </select><br/>
                <input type="submit" value="Submit" class="submitButton"/>
        </form>
    </div>
  )
}
