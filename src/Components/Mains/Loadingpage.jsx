import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../Styles/Loadingpage.css'
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

const Loadingpage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1700 },
      items: 3.5
    },
    desktop: {
      breakpoint: { max: 1700, min: 1000 },
      items: 3.5
    },
    tablet: {
      breakpoint: { max: 1000, min: 500 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 500, min: 100 },
      items:1.20
    }
    }
  return (
    <>
      <div>
        <Navbar/>
           
           <div className='home1'>
                 
              <div className='home1a'>
                 <div className='home2'>
                         <div className='home2a'><img src='Img/Nilbgc2.webp'></img></div>
                 </div>

                    <div className='home21'>
                       <div className='home21a'>In placerat et justo aenean ut scelerisque. </div>
                       <div className='home21b'>Id sit ultrices non eu <br></br> velit viverra amet nulla.</div>
                       <a href='/explore1' className='home21c'>
                          <div className='home21d'>Explore Ooty</div>
                        </a>
                    
                 </div>
               </div>
                
                <div className='hmob1'>
                    <div className='hmob2'>
                      <img src='Img/Nilbgc2.svg'></img>
                    </div>
                    
                    <div className='hmob3'>
                    <div className='home21a'>
                       <div className='home21aa'>In placerat et justo aenean ut scelerisque. </div>
                       <div className='home21bb'>Id sit ultrices non eu <br></br> velit viverra amet nulla.</div>
                       <a href='/explore1' className='home21cc'>
                          <div className='home21d'>Explore Ooty</div>
                        </a>
                    </div>
                    </div>
                    

                </div>


                <div className='home3'>
                         <div className='home3a'>
                            <div className='home3b'>Pellentesque nunc aliquam eu ornare sit</div>
                            <div className='home3c'>Enim proin pellentesque</div>
                            <div className='home3d'>Tincidunt sit dui purus ac risus natoque. Nulla quam neque ut lacus. Et ipsum vel eu faucibus. Viverra <br></br> neque rutrum interdum non nunc arcu. Iaculis fermentum ullamcorper in suscipit. In quam sed amet<br></br> vitae. Nullam laoreet tempor euismod quis a. Lorem quam diam laoreet nunc scelerisque integer <br></br>magna sit. Eget bibendum interdum metus etiam neque eget pellentesque turpis elementum.<br></br> Senectus mus tortor velit accumsan mauris. Eget turpis dui congue rhoncus egestas ultricies non. At<br></br> viverra tortor hac lobortis velit pulvinar vitae at enim. Nibh nisl auctor.</div>
                            <div className='home3da'>Tincidunt sit dui purus ac risus natoque. Nulla quam neque ut lacus. Et ipsum vel eu faucibus. Viverra neque rutrum interdum non nunc arcu. Iaculis fermentum ullamcorper in suscipit. In quam sed amet vitae. Nullam laoreet tempor euismod quis a. Lorem quam diam laoreet nunc scelerisque integer magna sit. Eget bibendum interdum metus etiam neque eget pellentesque turpis elementum. Senectus mus tortor velit accumsan mauris. Eget turpis dui congue rhoncus egestas ultricies non. At viverra tortor hac lobortis velit pulvinar vitae at enim. Nibh nisl auctor<br></br><br></br>Tincidunt sit dui purus ac risus natoque. Nulla quam neque ut lacus. Et ipsum vel eu faucibus. Viverra neque rutrum interdum non nunc arcu..</div>

                         </div>
                </div>



                <div className='home4'>

                    <div className='home42'>
                         <div className='home42a'><img src='Img/heart.svg'></img></div>
                         <div className='home42b'>Explore Nilgiris</div>
                         <div className='home42c'>Ipsum vel eget integer a. Sit arcu duis tempor scelerisque sapien sollicitudin lacus sapien. Diam urna a est tortor lacus purus.</div>
                    </div>

                      <div className='home41'>
                       {/* swipeable={false} // Disable swipe to prevent arrows from showing
      draggable={false} // Disable dragging to prevent arrows from showing
      showDots={false}   */}
                      <Carousel responsive={responsive} className='kopkopkopkop'  >

<div className='imagelopTT'>
<div className='imagelopT'>
  <div className='slid1'>
      <div className='slid11'>EAT</div>
      <div className='slid12'>Volutpat magna vestibulum amet</div>
      <a className='slid13' href='/cafe'><div className='slid14'>Discover Cafés</div></a>

  </div>
  <img src='/Img/homesl1.svg' data-aos="fade-up" data-aos-duration="2000" alt='' />
</div>


</div>   

<div  className='imagelopTT'>
<div className='imagelopT'>
<div className='slid1'>
      <div className='slid11'>STAY</div>
      <div className='slid12'>Nec ut justo gravida vitae.</div>
      <a className='slid13' href='/stays'><div className='slid14'>Discover Stays</div></a>

  </div>
  <img className='' src='/Img/homesl2.svg'  data-aos="fade-up" data-aos-duration="2000" alt='' />
</div>

</div>                 
    
<div  className='imagelopTT'>
<div className='imagelopT'>
<div className='slid1'>
      <div className='slid11'>ACTIVITIES</div>
      <div className='slid12'>Elementum lacus lacus donec risus</div>
      <a className='slid13' href='/restaurants'><div className='slid14'>Discover Activities</div></a>

  </div>
  <img src='/Img/homesl3.svg'  data-aos="fade-up" data-aos-duration="2000" alt='' />
</div>
</div>                 
    
<div  className='imagelopTT'>
<div className='imagelopT'>
<div className='slid1'>
      <div className='slid11'>EAT</div>
      <div className='slid12'>Volutpat magna vestibulum amet</div>
      <a className='slid13' href='/stays'><div className='slid14'>Discover Cafés</div></a>

  </div>
  <img src='/Img/homesl1.svg'  data-aos="fade-up" data-aos-duration="2000" alt='' />
</div>
</div>                 
    
<div  className='imagelopTT'>
<div className='imagelopT'>
<div className='slid1'>
      <div className='slid11'>EAT</div>
      <div className='slid12'>Volutpat magna vestibulum amet</div>
      <a className='slid13' href='/stays'><div className='slid14'>Discover Cafés</div></a>

  </div>
  <img src='/Img/homesl2.svg'  data-aos="fade-up" data-aos-duration="2000" alt='' />
</div>
</div>                 
    
<div  className='imagelopTT'>
<div className='imagelopT'>
<div className='slid1'>
      <div className='slid11'>SHOP</div>
      <div className='slid12'>Integer elit in donec tempus morbi. Orci.</div>
      <a className='slid13' href='/stays'><div className='slid14'>Discover Shop</div></a>

  </div>
  <img src='/Img/homesl3.svg'  data-aos="fade-up" data-aos-duration="2000" alt='' />
</div>
</div>                 
                  
    




</Carousel>
                      </div>
                </div>


                <div className='home5'>
                    <div className='home5a'>
                        <div className='home5b'>Tellus consectetur scelerisque </div>
                        <div className='home5c'>Penatibus diam enim at</div>
                       
                        <div className='home6'>

                        <div className='home6a'> 
                             <div className='home6b'><img src='Img/home5a.svg'></img></div>
                             <div className='home6c'>Sagittis in at turpis massa eget diam bibendum. Pulvinar purus nulla amet amet vel facilisi.</div>
                             <div className='home6d'>
                                <div className='home6da'><img className='line01' src='Img/line1.svg'></img></div>
                                 <div className='home6db'><a className='read1'>READ STORY<span className='hide'>i</span></a><a><img className='line02' src='Img/home5e.svg'></img></a> 
                              </div></div>

                             </div>
                             

                             <div className='home7a'> 
                             <div className='home7b'><img src='Img/home5a.svg'></img></div>
                             <div className='home7c'>Sagittis in at turpis massa eget diam bibendum. Pulvinar purus nulla amet amet vel facilisi.</div>
                             <div className='home7d'>
                                <div className='home6da'><img className='line01' src='Img/line1.svg'></img></div>
                                 <div className='home6db'><a className='read1'>READ STORY <span className='hide'>i</span> </a><a><img className='line02' src='Img/home5e.svg'></img></a> 
                              </div></div>
                             </div>


                        </div>

                    </div>    
                    
                </div>
                

          <div className='home8'>
                  <div  className='home81'>
                        <div className='home82'>
                          <div className='home82a'>Tellus consectetur scelerisque </div>
                           <div className='home82b'>Indigenous 5</div>
                           <div className='home82c'>Porta non enim feugiat nulla eu sodales cursus quisque venenatis. Varius molestie tempus convallis ornare praesent consequat eros elementum mauris. Feugiat adipiscing sed velit feugiat. Nec aliquam tristique turpis elementum ac. Ipsum volutpat sit egestas lobortis est est justo.</div>
                            <a className='home82d' href='/indi1'><div className='home82e'>Learn More</div></a>
                        </div>
                        <div className='home83'>
                           <div className='home83a'><img src='Img/home08.svg'></img></div>
                        </div>

                  </div>
          </div>


           </div>

        <Footer/>
      </div>
    </>
  )
}

export default Loadingpage