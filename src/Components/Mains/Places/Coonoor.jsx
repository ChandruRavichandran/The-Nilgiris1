import React  ,{useState} from 'react';
import '../Places/Tplaces.css'
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Navbar2 from '../Navbar2';
import PlacesData from './PlacesData';
import Footer from '../Footer';
import {useNavigate} from "react-router-dom"


const Coonoor = () => {

   const Coonoor1=[
    {
        id: 6,
        img:"./Img/des21.svg",
        name: "Sim's Park ",
        content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
        category: "coonoor",
        slug: "Simspark",

     },
     {
        id: 7,
        img:"./Img/des21.svg",
        name: "Lamb's Rock",
        content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
        category: "coonoor",
        slug: "Lambsrock",

     },
     {
        id: 8,
        img:"./Img/des21.svg",
        name: "Dolphin's Nose",
        content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
        category: "coonoor",
        slug: "Dolphinsnose",

     },
     {
      id: 9,
      img:"./Img/des21.svg",
      name: "Tea Estates",
      content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
      category: "coonoor",
      slug: "Teaestates",

   }
      ]
      
     const [noOfeElement,setnoOfElement]=useState(6);
  
//   const loadMore=()=>{
//          setnoOfElement(noOfeElement + noOfeElement);
//   }
  
      const slice = Coonoor1.slice(0,noOfeElement);
  
      const navigate = useNavigate()
      
      
      const handleRedirect = (slug) => {
         navigate(`/places/${slug}`);  // Use slug instead of ID
      };
      
  return (
    <>
    <div className='abu1'>
    <Navbar2/>
        <div className='des11'>

<div className='pls1'>
      <a className='pls2' href='/tplaces'  id='pls1'>All</a>
       <a className='pls2 pls21' href='/ooty'  id='pls2'>Ooty</a>
       <a className='pls2a pls21' href='/coonoor' id='pls3'>Coonoor</a>
       <a className='pls2 pls21'  href='/gudalur' id='pls4'>Gudalur</a>
       <a className='pls2 pls21' href='/kotagiri'  id='pls5'>Kotagiri</a>
       <a className='pls2 pls21' href='/avalanche' id='pls6'>Avalanche</a>
       <a className='pls2 pls21' href='/mudumalai' id='pls7'>Mudumalai</a>
       <a className='pls2 pls21' href='/masinagudi' id='pls8' >Masinagudi</a>
       <a className='pls2 pls21'  href='/hiddengems' id='pls9'>Hidden Gems</a>


</div>

<div className='mpls1'>
   
    <div className='mpls3'><a className='mpls2 ' href='/tplaces'  id='pls1'>All</a>
       <a className='mpls2 mpls21' href='/ooty'  id='pls2'>Ooty</a>
       <a className='mpls2a mpls21' href='/coonoor' id='pls3'>Coonoor</a></div>
       
       <div className='mpls4'> <a className='mpls2 mpls21'  href='/gudalur' id='pls4'>Gudalur</a>
       <a className='mpls2 mpls21' href='/kotagiri'  id='pls5'>Kotagiri</a></div>
      
      <div className='mpls5'> <a className='mpls2 mpls21' href='/avalanche' id='pls6'>Avalanche</a>
      <a className='mpls2 mpls21' href='/mudumalai' id='pls7'>Mudumalai</a></div>
      
      <div className='mpls6'><a className='mpls2 mpls21' href='/masinagudi' id='pls8' >Masinagudi</a>
      <a className='mpls2 mpls21'  href='/hiddengems' id='pls9'>Hidden Gems</a></div>
       



</div>


<hr className='des26 des16  plshr'></hr>

<div className='tpls5'>
    <div  className='tpls51'>Coonoor - The Laid-Back Tea <br></br>Town</div>
    <div  className='tpls52'>Coonoor's quiet charm lies in its tea gardens and misty landscapes. Wander through Sim's Park, take in <br></br>dramatic views from Dolphin's Nose, or simply sip freshly brewed tea while the cool mountain breeze<br></br> works its magic.</div>
    <div  className='tpls53'>Ooty is a picture-perfect blend of misty mountains, colonial charm, and endless greenery. From the shimmering Ooty Lake to the panoramic Doddabetta Peak, every corner feels like a postcard. Don't  miss the Nilgiri Mountain Railway—a nostalgic journey through tunnels, forests, and breathtaking tea plantations.</div>

</div>



<div className='tpls1'>
    <div className='tpls2'>
    {slice.map((item,index)=>{
        return(
           

     <Card className="tpls21">
        <Card.Title  className='tpls22'>
                                  
             <div key={index} className='tpls23'>
             <p  key={item}   onClick={() => handleRedirect(item.slug)} className='fc1'>
                <div className='tpls24'><img src={item.img} ></img></div>
                <div className='tpls25' >{item.name}</div>
                <div className='tpls26'>{item.content}</div>
                {/* <button key={item} onClick={() => handleRedirect(item.slug)} >go</button>  */}
                </p>
                
            </div>
        </Card.Title>
      </Card>
                    
        )
    })}
</div>

    {/* <button onClick={()=>loadMore()}>Load More</button> */}
</div>

    <div className='mtpls1'>
    {slice.map((item,index)=>{
        return(
       <Card className="tpls21">
           <Card.Title  className='tpls22'>
                                  
             <div key={index} className='tpls23'>
             <p  key={item}   onClick={() => handleRedirect(item.slug)} className='fc1'>
                <div className='tpls24'><img src={item.img} ></img></div>
                <div className='tpls25' >{item.name}</div>
                <div className='tpls26'>{item.content}</div>
                {/* <button key={item} onClick={() => handleRedirect(item.slug)} >go</button>  */}
                </p>
            </div>
        </Card.Title>
      </Card>

        )
    })}
    </div>

<Footer/>
</div>
</div>
    </>
  )
}

export default Coonoor