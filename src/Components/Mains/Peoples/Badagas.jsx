import React, { useState } from "react";
import '../../Styles/Indi1.css'
import Sidebar from "../Sidebar";
import '../../Styles/Loadingpage.css'
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Footer from "../Footer";
import Navbar2 from "../Navbar2";

const Badagas = () => {
  
    
    
      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1700 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1700, min: 1000 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1000, min: 500 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 500, min: 100 },
          items:1.15
        }
        }
  return (
    <>
     <div className='indi1'>

<Navbar2/>

<div className='indi1mmini'>
    
    <div className='indi1mmini1'>
         <img src='/Img/peoples.svg'></img>
    </div>
    <div className='indi1mmini2'>
         <img src='/Img/peoples1a.svg'></img>
    </div>


{/* <div className='navbgc'>
<Sidebar isopen={isopen} toggle={toggle} />


<div className='navbarthree'>

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
 <div className='navbar31' onClick={toggle} ><img src='/Img/Mobmenu.svg'></img>
 </div>
 </div>


</div>

</div>
</div> */}


<div className='indi2'>
<div  className='indi21'>Badagas</div>
<div  className='indi22'>Step into a Badaga village, and you’ll feel the pulse of the Nilgiris. As the largest indigenous group in the region, the Badagas have seamlessly blended tradition with modern life. Their villages—known as "hattis"—buzz with activity, from tea cultivation to vibrant community celebrations. The crown jewel of their cultural calendar? Hethai Habba is an ancestral festival filled with music, dance, and devotion. Known for their hospitality and storytelling, the Badagas keep their heritage alive through folk songs that echo across the hills, painting a picture of a people who honour the past while embracing the future.</div>
</div>


<div className='indi3'><img src='Img/indi1.svg'></img></div>


<div className='indi4'>
   <div className='indi4a'>Local Cuisines</div>
   <div className='indi4b'>Tempus nisl turpis tincidunt <br></br> amet est etiam nulla ac.</div>

   <div>


   <div className='indi41'>
          <Carousel responsive={responsive} className='kopkopkopkop41'>

<div className='imagelopTT41'>
<div className='imagelopT41'>

<img src='/Img/peoples2.svg' data-aos="fade-up" data-aos-duration="2000" alt='' />


</div>
<div className='indi4e'>
<div className='indi4c'>Volutpat magna </div>
<div className='indi4d'>Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.</div>
</div>


</div>   

<div  className='imagelopTT41'>
<div className='imagelopT41'>

<img className='' src='/Img/peoples2.svg'  data-aos="fade-up" data-aos-duration="2000" alt='' />

</div>
<div className='indi4e'>
<div className='indi4c'>Volutpat magna </div>
<div className='indi4d'>Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.</div>
</div>

</div>     


<div  className='imagelopTT41'>
<div className='imagelopT41'>

<img className='' src='/Img/peoples2.svg'  data-aos="fade-up" data-aos-duration="2000" alt='' />

</div>
<div className='indi4e'>
<div className='indi4c'>Volutpat magna </div>
<div className='indi4d'>Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.</div>
</div>

</div>  

<div  className='imagelopTT41'>
<div className='imagelopT41'>

<img src='/Img/peoples2.svg'  data-aos="fade-up" data-aos-duration="2000" alt='' />

</div>
<div className='indi4e'>
<div className='indi4c'>Volutpat magna </div>
<div className='indi4d'>Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.</div>
</div>

</div>                 

    



    
      





</Carousel>
          </div>

   </div>

    {/* <div className='indi43'>
        <a className='indi42a'><div className='indi42b'>View All</div></a>
        
    </div> */}

</div>


<div className='indi5'>

<div className='indi51'>
 <div className='indi51a'>Enim proin pellentesque</div>
 <div className='indi51b'>Tincidunt sit dui purus ac risus natoque. Nulla quam neque ut lacus. Et ipsum vel eu faucibus. Viverra neque rutrum interdum non nunc arcu. </div>
</div>


<div className='indi52'>
  <div className='indi54'>
    <img src='Img/indi5.svg'></img>
    <img src='Img/indi5.svg'></img>
  </div>
  <div className='indi54'>
      <div className='indi54a'>
          <div className='indi54b'>Adipiscing quam</div>
          <div className='indi54c'>Lectus ac egestas est risus sem dolor tortor neque. Risus tellus quisque elementum nibh fermentum pharetra elit arcu morbi. Sed iaculis sed ultrices in non lacus mi id morbi. Elit nunc tortor lorem massa. Adipiscing sed neque nullam massa nullam faucibus amet.</div>
      </div>
      <div className='indi54a'>
      <div className='indi54b'>Adipiscing quam</div>
      <div className='indi54c'>Lectus ac egestas est risus sem dolor tortor neque. Risus tellus quisque elementum nibh fermentum pharetra elit arcu morbi. Sed iaculis sed ultrices in non lacus mi id morbi. Elit nunc tortor lorem massa. Adipiscing sed neque nullam massa nullam faucibus amet.</div>
      </div>
      <div className='indi54a'>
      <div className='indi54b'>Adipiscing quam</div>
      <div className='indi54c'>Lectus ac egestas est risus sem dolor tortor neque. Risus tellus quisque elementum nibh fermentum pharetra elit arcu morbi. Sed iaculis sed ultrices in non lacus mi id morbi. Elit nunc tortor lorem massa. Adipiscing sed neque nullam massa nullam faucibus amet.</div>
      </div>
  </div>
  <div className='indi54'>
  <div className='indi54a'>
  <div className='indi54b'>Adipiscing quam</div>
  <div className='indi54c'>Lectus ac egestas est risus sem dolor tortor neque. Risus tellus quisque elementum nibh fermentum pharetra elit arcu morbi. Sed iaculis sed ultrices in non lacus mi id morbi. Elit nunc tortor lorem massa. Adipiscing sed neque nullam massa nullam faucibus amet.</div>
  </div>
      <div className='indi54a'>
      <div className='indi54b'>Adipiscing quam</div>
      <div className='indi54c'>Lectus ac egestas est risus sem dolor tortor neque. Risus tellus quisque elementum nibh fermentum pharetra elit arcu morbi. Sed iaculis sed ultrices in non lacus mi id morbi. Elit nunc tortor lorem massa. Adipiscing sed neque nullam massa nullam faucibus amet.</div>
      </div>
      <div className='indi54a'>
      <div className='indi54b'>Adipiscing quam</div>
      <div className='indi54c'>Lectus ac egestas est risus sem dolor tortor neque. Risus tellus quisque elementum nibh fermentum pharetra elit arcu morbi. Sed iaculis sed ultrices in non lacus mi id morbi. Elit nunc tortor lorem massa. Adipiscing sed neque nullam massa nullam faucibus amet.</div>
      </div>
  </div>
</div>

</div>
</div>
<Footer/>
</div>
   </>
    )
}

export default Badagas