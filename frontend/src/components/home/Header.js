import Searchbar from "../subComponents/Searchbar";
import IconCartEtc from "../subComponents/IconCartEtc";
import IconShop from "../subComponents/IconShop";
import SignInUp from "../subComponents/SignInUp";
import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

// Routes
import Canvas from "./Canvas";

export default function Header() {

  const canvasActivated = () => {  
    // Open SignIn Canvas
    const changeDisplay = document.querySelector(".canvasOn");
    changeDisplay.style.display = "block";

    const clickSignInNavLink = document.querySelector("#signInNavLink");
    clickSignInNavLink.click();

  }

  return (
    <div>
      <div className="headerContainer">
        <div className="logoShop">
          <span>TokoKu</span>
        </div>
        <div className="searchBarContainer">
          <form>
            <input type="text" name="searchBar" id="searchInput" placeholder="Search...."/>
            <button>
              <SearchIcon /> 
            </button>
          </form> 
        </div>
        <div className="listIcon" onClick={canvasActivated}>
          <FormatListBulletedIcon/>
        </div>
      </div>
      <Canvas />
{/* For size laptop and bigger*/}
      <div className="headerContainer" id="forLaptop">
        <div className="logoShop">
          <span>TokoKu</span>
        </div>
        <div className='headerCategory'>Category</div>
        <Searchbar />
        <IconCartEtc />
        <IconShop />
        <SignInUp />
      </div>
    </div>
  )
}
