import React, {useState} from 'react';
import {signInData} from "../../api/SignIn";
// import "./SignIn.css";
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSignIn = async(e, {email, password}) => {
    e.preventDefault();

    const postSignIn = await signInData(email, password);
    if (postSignIn.status === 200) {
      return navigate('/products')
    } else {
      console.log('Login failed.')
      console.log(postSignIn);
      return navigate('/login')
    }      
  }

  return (
    <div>
      <form className="canvasOnForm" onSubmit={e => {onSignIn(e,{email, password})}}>
        <label>Email:</label>
        <input type="email" name="email" id="email" className="canvasOnInput" value={email} onChange={e=>setEmail(e.target.value)} /><br/>
        <label>Password:</label>
        <input type="password" name="password" id="password" className="canvasOnInput" value={password} onChange={e=>setPassword(e.target.value)} /><br/>
        <input type="submit" className="submitButton"/>
      </form>
    </div>
  )
}
