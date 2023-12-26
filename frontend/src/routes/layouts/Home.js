import Header from "../../components/home/Header";
import Body from "../../components/home/Body";
import Footer from "../../components/home/Footer";
import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div id="homeLayoutContainer">
        <Header />
        <Body />
        <Footer />
    </div>
  )
}
