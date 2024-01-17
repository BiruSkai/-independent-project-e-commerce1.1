import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../../components/home/Header';
import Body from '../../../components/home/Body';
import Footer from '../../../components/home/Footer';

export default function Products() {
  const loginStatus = String(useSelector((state) => state.loginSliceReducer.status));
  console.log(loginStatus);

  return (
    <div>
      <Header login={loginStatus} />
      <Body />
      <Footer />
    </div>
  )
}
