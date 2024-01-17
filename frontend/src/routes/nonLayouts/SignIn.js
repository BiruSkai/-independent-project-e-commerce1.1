import React, {useState} from 'react';
import {signInData} from "../../api/indexPaths";
import "./SignIn.css";
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {login} from '../../redux/ducks/loginSlice';

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [failedLogin, setFailedLogin] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSignIn = async(e, {email, password}) => {
    e.preventDefault();

    const postSignIn = await signInData(email, password);
    if (postSignIn.status === 200) {
      setFailedLogin('');
      dispatch(login(true));
      navigate('/products');
      return;
    } else {
      setFailedLogin( 'Login failed.');
      return navigate('/login');
    }      
  }

  return (
    <div>
      <div className="infoLogin">{failedLogin}</div>
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
