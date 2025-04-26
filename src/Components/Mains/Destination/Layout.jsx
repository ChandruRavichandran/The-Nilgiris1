import React from "react";
import { useParams, Link } from "react-router-dom";
import pagesData from "./pagedata"; // Import the data file
import Navbar2 from "../Navbar2";
import Footer from "../Footer";
import '../../Styles/Profile1.css'

const Layout = () => {
  const { pageId } = useParams(); // Get page ID from URL
  const pageData = pagesData[pageId] || { 
    title: "Page Not Found", 
    content: "This page does not exist.", 
    name: "" ,
    sname:" ",
    img:"",
    overview:"",
    mapimg:"",
    location:" ",
    dimg:"",
    mdimg:""

  };

  return (
  

<>

<div className='abu1'>
        <Navbar2/>
       
             <div className='pro01'>

               <div className='pro02 mob001'><div className='pro021'><img src={pageData.dimg}  alt="Page Image"></img></div> </div>
               <div className='pro02 mob002' ><div className='pro021'><img src={pageData.mding}></img></div> </div>


               <div className='pro03'>
                    <div className='pro03a'>
                    <div className='pro031'>EATS</div>
                    <div className='pro032'>{pageData.name}</div>
                    <hr className='hrpro01'></hr>
                    <div className='pro033'>{pageData.sname}</div>
                    <div className='pro034'>
                         <div className='pro03a' id='pro034a'><div id='pro034'>Cafe</div></div>
                         <div className='pro03b' id='pro034a'><div id='pro034'>Scenic views</div></div>
                         <div className='pro03c' id='pro034a'><div id='pro034'>Pet friendly</div></div>
                         <div className='pro03d' id='pro034a'><div id='pro034'>Valet Parkingw</div></div>

                    </div>
                    <div  className='pro035'>Overview</div>
                    <div className='pro036'>{pageData.overview}</div>
               </div>
                    </div>
                   


               <div className='pro04'>
                   <div className='pro041'>Location</div>
                   <div className='pro042'>{pageData.location}</div>
                   {/* <div className='pro043'><div className='pro04a'><img src={pageData.mapimg}></img></div></div> */}
                   <div className='pro043'><div className='pro04a'>
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62575.05133734918!2d76.6522216612004!3d11.411849727057877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8bd84b5f3d78d%3A0x179bdb14c93e3f42!2sOoty%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1743659834219!5m2!1sen!2sin" 
                  //  width="600" 
                  //  height="450" 
                   style={{border:0}} 
                   allowfullscreen="" 
                   loading="lazy" 
                   referrerpolicy="no-referrer-when-downgrade">
                   </iframe>
                    </div></div>

               </div>


             </div>
        <Footer/>
    </div>
</>

  );
};

export default Layout;
