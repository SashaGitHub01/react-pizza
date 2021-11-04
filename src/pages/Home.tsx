import React, { useState, useEffect, useRef } from "react";
import './Home.scss';
import HomeContent from "../components/Home/HomeContent/HomeContent";
import HomeSubnav from "../components/Home/HomeSubnav/HomeSubnav";
import SortPopup from "../components/Home/SortPopup/SortPopup";

const Home = () => {
   const [currentNav, setCurrentNav] = useState<string>('Все');
   const [sortBy, setSortBy] = useState<string>('популярности');

   return (
      <main className="main">
         <div className="main__col main-col">
            <div className="main-col__subnav main-subnav">
               <HomeSubnav
                  setCurrentNav={setCurrentNav}
                  currentNav={currentNav}
               />
               <SortPopup
                  sortBy={sortBy}
                  setSortBy={setSortBy}
               />
            </div>
            <HomeContent currentNav={currentNav} />
         </div>
      </main>
   )
}

export default Home