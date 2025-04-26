import React, { useState } from "react";
import { Link } from "react-router-dom";
import pagesData from "./pagedata"; // Import data
import Navbar2 from "../Navbar2";
import '../Destination/Home.css';
import "../Places/Tplaces.css"
import Footer from "../Footer";
import Cafedata from "./Cafedata";

const Cafe = () => {
    const itemsPerPage = 10; // Number of items to show initially
    const [visibleCount, setVisibleCount] = useState(itemsPerPage); // State to track visible items
  
    const allPages = Object.entries(Cafedata); // Convert object to array for iteration
  
    const loadMore = () => {
      setVisibleCount((prevCount) => prevCount + itemsPerPage); // Show more items
    };
  return (
    <>
    <div className='abu1'>
      <Navbar2 />
      <div className='des11'>
        {/* Navigation Tabs */}
        <div className='pls1'>
          <a className='pls2' href='/home' id='pls1'>All Places</a>
          <a className='pls2a pls21' href='/cafe' id='pls2'>Cafe</a>
          <a className='pls2 pls21' href='/restaurants' id='pls3'>Restaurants</a>
          <a className='pls2 pls21' href='/stays' id='pls4'>Stay</a>
        </div>


        <div className='mpls1'>
 
 <div className='mpls3'><a className='mpls2 ' href='/home'  id='pls1'>All Places</a>
    <a className='mpls2a mpls21' href='/cafe'  id='pls2'>Cafe</a>
    <a className='mpls2 mpls21' href='/restaurants' id='pls3'>Restaurants</a></div>
    
    <div className='mpls4'> <a className='mpls2 mpls21' x  href='/stays' id='pls4'>Stay</a>
   </div>
    



</div>


        <hr className='des26 des16 plshr' />

        {/* Page Listings */}
        <div className="hm1">
         
          <div className="page-list" id="hm2">
            {allPages.slice(0, visibleCount).map(([key, item]) => (
              <Link key={key} to={`/page/${key}`} className="place-card">
                <div className='hm3'>
                  <div className='hm4'>
                    <img src={item.img} alt={item.name} className="place-image" />
                  </div>
                  <div className='hm5'>{item.name}</div>
                  <div className='hm6'>{item.content}</div>
                </div>
              </Link>
            ))}
          </div>



          <div className="page-list" id="mhm2">
            {allPages.slice(0, visibleCount).map(([key, item]) => (
              <Link key={key} to={`/page/${key}`} className="place-card">
                <div className='mhm3'>
                  <div className='mhm4'>
                    <img src={item.img} alt={item.name} className="place-image" />
                  </div>
                  <div className='mhm5'>{item.name}</div>
                  <div className='mhm6'>{item.content}</div>
                </div>
              </Link>
            ))}
          </div>

         
        </div>

        {/* Load More Button */}
        {visibleCount < allPages.length && (
          <div className="load-more-container homebtn" id="loadmorebtn1">
            <button onClick={loadMore} className="loadmorebtn" id="loadmorebtn">Load More</button>
          </div>
        )}

        
      </div>
      <Footer/>
    </div>
  </>
  )
}

export default Cafe