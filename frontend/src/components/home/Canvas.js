import React from 'react';
import "./Canvas.css";
import {NavLink, Outlet} from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

export default function Canvas() {

  const closeCanvas = () => {
    document.querySelector(".canvasOn").style.display = "none";
  }

  return (
    <div className="canvasOn">
       <header>
        <NavLink to="login" id="signInNavLink">Sign In</NavLink>
        <NavLink to="register_user">Sign Up</NavLink>
        <div id="closeCanvasSignIn" onClick={closeCanvas}><CloseIcon fontSize='small' /></div>
       </header>
       <main>
        <Outlet />
       </main>
    </div>
  )
}
