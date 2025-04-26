import React from 'react'
import '../../../Styles/Destination3.css'

// import '../../../Styles/Landingpage.css'

import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Navbar2 from '../../Navbar2';
import Footer from '../../Footer';



const Theppakaduelephantcamp = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1700 },
      items: 1.25
    },
    desktop: {
      breakpoint: { max: 1700, min: 1000 },
      items: 1.25
    },
    tablet: {
      breakpoint: { max: 1000, min: 500 },
      items: 1
       },
    mobile: {
      breakpoint: { max: 500, min: 100 },
      items:1
    }
    }
  return (
    <>
    <div   className='abu1'>
    <Navbar2/>
    
    <div className='des31'>
 
           
        <div className='des32'>
        <div className='des33'>Theppakadu Elephant Camp</div>
         <hr></hr>
         <div className='des34'>Overview</div>
         <div className='des35'>A calm oasis in the heart of Ooty, this man-made lake is perfect for boating and lazy afternoons. Surrounded by eucalyptus trees and misty hills, it’s a favourite spot for families and couples looking to soak in Ooty’s tranquil beauty.
         </div>
         <div className='des36'>Location</div>
         <div className='des37'>59321 Mante Points, Kenner 20538</div>
         <div className='des38'> <div className='des38a'>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.621205256467!2d76.58146577464017!3d11.578989588622802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8af7ca9d23aab%3A0xefca60cff9b5cd6f!2sTheppakadu%20Elephant%20Camp!5e0!3m2!1sen!2sin!4v1743664368759!5m2!1sen!2sin"  style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div></div>

        </div>

        <div className='des39'>

           <div className='pop1'>
              
                                   <div className='pop2'>
                                    <Carousel responsive={responsive} className='kopkopkopkop'>
              
              <div className='pop3'>
              <div className='pop31'>
              
                <img src='/Img/des32a.svg' data-aos="fade-up" data-aos-duration="2000" alt='' />
              </div>
        
              
              </div>

              <div className='pop3'>
              <div className='pop31'>
              
                <img src='/Img/des32a.svg' data-aos="fade-up" data-aos-duration="2000" alt='' />
              </div>
        
              
              </div>

              </Carousel>
              
              
              </div>   

              <div className='des311a'>
           <div className='des311aa'><img src='/Img/gal1.svg'></img></div>
         </div>
           </div>
       

        </div>
           

         
    </div>
    
         <div className='des311'>
           <div className='des311a'><img src='/Img/gal1.svg'></img></div>
         </div>

    <Footer/>
 </div>
</>    )
}

export default Theppakaduelephantcamp

