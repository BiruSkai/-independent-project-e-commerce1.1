import React, {useState} from "react";
import "./Header.css";
import Searchbar from "../subComponents/Searchbar";
import IconCartEtc from "../subComponents/IconCartEtc";
import IconShop from "../subComponents/IconShop";
import SignInUp from "../subComponents/SignInUp";
import Category from '../category/Category';
import SearchIcon from '@mui/icons-material/Search';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';

// Routes
import Canvas from "./Canvas";

export default function Header({login}) {
  const [categoryActive, setCategoryActive] = useState(false);
  
  // CategoryIcon
  const showCategories = () => {
    setCategoryActive(true);
  }

  // SignIn, SignUp Icon
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
          <span>`TokoKu {login}`</span>
        </div>
        <div className="categorySearchBarContainer">
          <div className="categoryIcon" onMouseOver={showCategories}>
            <CategoryOutlinedIcon />
          </div>
          <div className="searchBarContainer">
            <form>
              <input type="text" name="searchBar" id="searchInput" placeholder="Search...."/>
              <button>
                <SearchIcon /> 
              </button>
            </form> 
          </div>
        </div>
        <div className="listIcon" onMouseOver={canvasActivated}>
          <FormatListBulletedIcon/>
        </div>
      </div>
      <Canvas />

      {categoryActive && <Category categoryActive={categoryActive} setCategoryActive={setCategoryActive}/>}

{/* For size laptop and bigger*/}
      <div className="headerContainer" id="forLaptop">
        <div className="logoShop">
          <span>TokoKu</span>
        </div>
        <div className='headerCategory' onMouseOver={showCategories}>Category</div>
        <Searchbar />
        <IconCartEtc />
        <IconShop />
        <SignInUp />
      </div>
    </div>
  )
}
