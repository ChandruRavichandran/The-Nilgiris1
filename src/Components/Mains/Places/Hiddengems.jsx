import React  ,{useState} from 'react';
import '../Places/Tplaces.css'
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Navbar2 from '../Navbar2';
import PlacesData from './PlacesData';
import Footer from '../Footer';
import {useNavigate} from "react-router-dom"



const Hiddengems = () => {
  const Hiddengems1=[
    {
      id: 22,
      img:"./Img/des21.svg",
      name: "Emerald Lake - A Tranquil Retreat",
      content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
      category: "hiddengems",
      slug: "Emeraldlake",

   },
   
    {
      id: 23,
      img:"./Img/des21.svg",
      name: "Upper Bhavani - Untouched Wilderness",
      content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
      category: "hiddengems",
      slug: "Upperbhavani",

   },
   {
    id: 24,
    img:"./Img/des21.svg",
    name: "Glenmorgan -Vintage Charm ",
    content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
    category: "hiddengems",
    slug: "Glenmorgan",

 },
 {
  id: 25,
  img:"./Img/des21.svg",
  name: "Sholur – Scenic Vistas",
  content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
  category: "hiddengems",
  slug: "Sholur",

},
{
id: 26,
img:"./Img/des21.svg",
name: "Lady Canning's Seat - Panoramic Views ",
content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
category: "hiddengems",
slug: "Ladycanning",

},
{
id: 27,
img:"./Img/des21.svg",
name: "Ketti Valley Viewpoint - Expansive Landscapes",
content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
category: "hiddengems",
slug: "Ketti",

},
{
id: 28,
img:"./Img/des21.svg",
name: "Hidden Valley - Secluded Serenity ",
content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
category: "hiddengems",
slug: "Hiddenvalley",

}
]


    const [noOfElement, setNoOfElement] = useState(6);

const loadMore=()=>{
       setNoOfElement(noOfElement + noOfElement);
}

   const slice = Hiddengems1.slice(0,noOfElement);

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
   <a className='pls2 pls21' href='/coonoor' id='pls3'>Coonoor</a>
   <a className='pls2 pls21'  href='/gudalur' id='pls4'>Gudalur</a>
   <a className='pls2 pls21' href='/kotagiri'  id='pls5'>Kotagiri</a>
   <a className='pls2 pls21' href='/avalanche' id='pls6'>Avalanche</a>
   <a className='pls2 pls21' href='/mudumalai' id='pls7'>Mudumalai</a>
   <a className='pls2 pls21' href='/masinagudi' id='pls8' >Masinagudi</a>
   <a className='pls2a pls21'  href='/hiddengems' id='pls9'>Hidden Gems</a>


</div>

<div className='mpls1'>

<div className='mpls3'><a className='mpls2 ' href='/tplaces'  id='pls1'>All</a>
   <a className='mpls2 mpls21' href='/ooty'  id='pls2'>Ooty</a>
   <a className='mpls2 mpls21' href='/coonoor' id='pls3'>Coonoor</a></div>
   
   <div className='mpls4'> <a className='mpls2 mpls21'  href='/gudalur' id='pls4'>Gudalur</a>
   <a className='mpls2 mpls21' href='/kotagiri'  id='pls5'>Kotagiri</a></div>
  
  <div className='mpls5'> <a className='mpls2 mpls21' href='/avalanche' id='pls6'>Avalanche</a>
  <a className='mpls2 mpls21' href='/mudumalai' id='pls7'>Mudumalai</a></div>
  
  <div className='mpls6'><a className='mpls2 mpls21' href='/masinagudi' id='pls8' >Masinagudi</a>
  <a className='mpls2a mpls21'  href='/hiddengems' id='pls9'>Hidden Gems</a></div>
   



</div>


<hr className='des26 des16  plshr'></hr>

<div className='tpls5'>
    <div  className='tpls51'>Hidden Gems</div>
    <div  className='tpls52'>At the foothills of the Nilgiris, Masinagudi is where the wild roam free. Go on a thrilling safari, track <br></br> exotic wildlife, or simply revel in the quiet beauty of this raw, unspoiled landscape.</div>
    <div  className='tpls53'>At the foothills of the Nilgiris, Masinagudi is where the wild roam free. Go on a thrilling safari, track exotic wildlife, or simply revel in the quiet beauty of this raw, unspoiled landscape.</div>

</div>


<div className='tpls1'>
<div className='tpls2'>
{slice.map((item,index)=>{
    return(
       

 <Card className="tpls21">
    <Card.Title  className='tpls22'>
                              
    <div key={index}  className='tpls23' >


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

<div  id='loadmorebtn1'> 
    {noOfElement < Hiddengems1.length && (
           <button onClick={() => setNoOfElement((prev) => prev + 6)} id="loadmorebtn">
            Load More
           </button>
         )}
         
    </div>

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

export default Hiddengems