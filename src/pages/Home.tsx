import React, { useState, useEffect, useRef } from "react";
import './Home.scss';
import HomeContent from "../components/Home/HomeContent/HomeContent";
import HomeSubnav from "../components/Home/HomeSubnav/HomeSubnav";
import SortPopup from "../components/Home/SortPopup/SortPopup";

const Home = () => {

   return (
      <main className="main">
         <div className="main__col main-col">
            <div className="main-col__subnav main-subnav">
               <HomeSubnav />
               <SortPopup />
            </div>
            <HomeContent />
         </div>
      </main>
   )
}

export default Home