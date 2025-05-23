import React from 'react'
import "../Styles/Explore1.css"
import Footer from './Footer'
import Navbar2 from './Navbar2'

const Explore1 = () => {
  return (
   <>
     <div>
        <Navbar2/>
        <div className='exp'>
                
                <div className='exp01'>
                       
                       <div className='exp02'>
                         <div className='exp001'>In placerat et justo aenean ut scelerisque. </div>
                         <div className='exp002'>Indigenous 5</div>
                       </div>
                       <div className='exp03'>
                           <img className='lapexp' src='Img/sec1.svg'></img>
                           <img  className='mobexp' src='Img/sec3.svg'></img>
                           
                       </div>
                       
                </div>


                <div className='exp04'>
                       <div className='exp04a'>Enim proin pellentesque</div>
                       <div className='exp04b'>Tincidunt sit dui purus ac risus natoque. Nulla quam neque ut lacus. Et ipsum vel eu faucibus. Viverra neque rutrum interdum non nunc arcu. </div>
                       <div className='exp04c'>
                           <div className='exp04d'>
                           <a href='/badagas'> <img src='Img/sec2.svg'></img></a> 
                           <div className='exp04e'>Pellentesque nunc </div>
                              <div className='exp04f'>Badagas</div>
                              <div className='exp04g'>Tincidunt sit dui purus ac risus natoque. Nulla quam neque ut lacus. </div>

                           </div>
                           <div className='exp04d'>
                               <a href='/toda'> <img src='Img/sec2.svg'></img></a> 
                              <div className='exp04e'>Pellentesque nunc </div>
                              <div className='exp04f'>Toda</div>
                              <div className='exp04g'>Tincidunt sit dui purus ac risus natoque. Nulla quam neque ut lacus. </div>

                           </div>
                           <div className='exp04d'>
                           <a href='/kota'> <img src='Img/sec2.svg'></img></a> 
                           <div className='exp04e'>Pellentesque nunc </div>
                              <div className='exp04f'>Kota</div>
                              <div className='exp04g'>Tincidunt sit dui purus ac risus natoque. Nulla quam neque ut lacus. </div>

                           </div>

                           <div className='exp04d'>
                           <a href='/kurumba'> <img src='Img/sec2.svg'></img></a> 
                           <div className='exp04e'>Pellentesque nunc </div>
                              <div className='exp04f'>Kurumba</div>
                              <div className='exp04g'>Tincidunt sit dui purus ac risus natoque. Nulla quam neque ut lacus. </div>

                           </div>
                           <div className='exp04d'>
                           <a href='/irula'> <img src='Img/sec2.svg'></img></a> 
                           <div className='exp04e'>Pellentesque nunc </div>
                              <div className='exp04f'>Irula</div>
                              <div className='exp04g'>Tincidunt sit dui purus ac risus natoque. Nulla quam neque ut lacus. </div>

                           </div>
                       </div>

                </div>

        </div>
        <Footer/>
     </div>
   </>
  )
}

export default Explore1