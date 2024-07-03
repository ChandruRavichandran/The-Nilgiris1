import React, { useState } from 'react'
import '../Styles/Navbar.css'
import Sidebar from './Sidebar'

const Navbar = () => {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };
  return (
   <>
         <Sidebar isopen={isopen} toggle={toggle} />


   <div className='navbar'>

       <div className='navlap'>
            
            <a href='/' className='navbar1'><img src='/Img/Nillogo.svg'></img></a>

            <div className='navbar2'>
              <a href='/destination3' className='n4'>Destination</a>
              <a href='/profile1' className='n4'>Lifestyle</a>
              <a href='/destination2' className='n4'>Stories</a>
              <a href='/aboutus' className='n4'>About</a>
              <a href='/destination1' className='n4'>More :</a>
            </div>

            <div className='navbar3'>
                <div className='navbar31' onClick={toggle}><img src='/Img/Mobmenu.svg'></img>
                </div>
                </div>


       </div>

   </div>
   </>
)
}

export default Navbar