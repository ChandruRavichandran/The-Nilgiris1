import React, { useState } from 'react'
import '../Styles/Navbar2.css'
import Sidebar from './Sidebar'

const Navbar2 = () => {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };
  return (
   <>
         <Sidebar isopen={isopen} toggle={toggle} />


   <div className='navbarsecond'>

       <div className='navlap'>
            
            <a href='/' className='navbar1'><img src='/Img/Nillogo.svg'></img></a>

            <div className='navbar2'>
              <a href='/tplaces' className='n4'>Destination</a>
              <a href='/explore1' className='n4'>Lifestyle</a>
              <a href='/destination3' className='n4'>Stories</a>
              <a href='/aboutus' className='n4'>About</a>
              <a href='/home' className='n4'>More :</a>
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

export default Navbar2