import React  ,{useState} from 'react';
import '../Places/Tplaces.css'
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Navbar2 from '../Navbar2';
import PlacesData from './PlacesData';
import Footer from '../Footer'
import {useNavigate} from "react-router-dom"
const Tplaces = () => {

    const CardData=[
      {
         id: 1,
         img:"./Img/des21.svg",
         name: "Ooty Lake ",
         content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
         slug: "ootylake",
         category: "ooty",
      },
      {
         id: 2,
         img:"./Img/des21.svg",
         name: "Botanical Gardens ",
         slug: "Botanicalgardens",
         content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
         category: "ooty",
      },
      {
         id: 3,
         img:"./Img/des21.svg",
         name: "Doddabetta Peak ",
         content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
         category: "ooty",
         slug: "Doddabettapeak",

      }
      ,
      {
         id: 4,
         img:"./Img/des21.svg",
         name: "Nilgiri Mountain Railway ",
         content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
         category: "ooty",
         slug: "Nilgirimountainrailway",

      }
      ,
      {
         id: 5,
         img:"./Img/des21.svg",
         name: "Rose Garden ",
         content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
         category: "ooty",
         slug: "Rosegarden",

      },
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

    },
    {
      id: 10,
      img:"./Img/des21.svg",
      name: "Needle Rock Viewpoint",
      content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
      category: "gudalur",
      slug: "Needlerockviewpoint",

   },
   {
      id:11,
      img:"./Img/des21.svg",
      name: "Frog Hill Viewpoint",
      content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
      category: "gudalur",
      slug: "Froghillviewpoint",

   } ,
   {
      id: 12,
      img:"./Img/des21.svg",
      name: "Kodanad View Point",
      content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
      category: "kotagiri",
      slug: "Kodanadviewpoint",

   },
   {
      id: 13,
      img:"./Img/des21.svg",
      name: "Catherine Falls ",
      content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
      category: "kotagiri",
      slug: "Catherinefalls",

   },
   {
      id: 14,
      img:"./Img/des21.svg",
      name: "Longwood Shola",
      content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
      category: "kotagiri",
      slug: "Longwoodshola",

   },
   {
      id: 15,
      img:"./Img/des21.svg",
      name: "Avalanche Lake ",
      content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
      category: "avalanche",
      slug: "Avalanchelake",

   },
   {
      id: 16,
      img:"./Img/des21.svg",
      name: "Sanctuary Avalanche ",
      content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
      category: "avalanche",
      slug: "Sanctuaryavalanche",

   },
 
   {
      id: 18,
      img:"./Img/des21.svg",
      name: "Jungle Safari ",
      content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
      category: "mudumalai",
      slug: "Junglesafari",

   },
   {
      id: 19,
      img:"./Img/des21.svg",
      name: "Theppakadu Elephant Camp",
      content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
      category: "mudumalai",
      slug: "Theppakaduelephantcamp",

   },
   {
      id: 20,
      img:"./Img/des21.svg",
      name: "Wildlife Safaris",
      content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
      category: "masinagudi",
      slug: "Wildlifesafaris",

   },
   {
      id: 21,
      img:"./Img/des21.svg",
      name: "Birdwatching",
      content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
      category: "masinagudi",
      slug: "Birdwatching",

   },
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
  name: "Sholur - Scenic Vistas",
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

    const slice = CardData.slice(0,noOfElement);        

// const loadMore=()=>{
//        setnoOfElement(noOfeElement + noOfeElement);
//  }


 

const navigate = useNavigate()
const handleRedirect = (slug) => {
   navigate(`/places/${slug}`); 
};

     const main = PlacesData.cardData.name

 const [data1,setData1]=useState(PlacesData.cardData)

 const filterType =(category)=>{
    setData1(
        PlacesData.cardData.filter((item)=>{
            return item.category===category;
        })
    )
 }
  
  return (
    <>
    <div className='abu1'>
    <Navbar2/>
        <div className='des11'>

   <div className='pls1'>
      <a className='pls2a ' href='/tplaces'  id='pls1'>All</a>
       <a className='pls2 pls21' href='/ooty'  id='pls2'>Ooty</a>
       <a className='pls2 pls21' href='/coonoor' id='pls3'>Coonoor</a>
       <a className='pls2 pls21'  href='/gudalur' id='pls4'>Gudalur</a>
       <a className='pls2 pls21' href='/kotagiri'  id='pls5'>Kotagiri</a>
       <a className='pls2 pls21' href='/avalanche' id='pls6'>Avalanche</a>
       <a className='pls2 pls21' href='/mudumalai' id='pls7'>Mudumalai</a>
       <a className='pls2 pls21' href='/masinagudi' id='pls8' >Masinagudi</a>
       <a className='pls2 pls21'  href='/hiddengems' id='pls9'>Hidden Gems</a>



</div>

<div className='mpls1'>
   
    <div className='mpls3'><a className='mpls2a ' href='/tplaces'  id='pls1'>All</a>
       <a className='mpls2 mpls21' href='/ooty'  id='pls2'>Ooty</a>
       <a className='mpls2 mpls21' href='/coonoor' id='pls3'>Coonoor</a></div>
       
       <div className='mpls4'> <a className='mpls2 mpls21'  href='/gudalur' id='pls4'>Gudalur</a>
       <a className='mpls2 mpls21' href='/kotagiri'  id='pls5'>Kotagiri</a></div>
      
      <div className='mpls5'> <a className='mpls2 mpls21' href='/avalanche' id='pls6'>Avalanche</a>
      <a className='mpls2 mpls21' href='/mudumalai' id='pls7'>Mudumalai</a></div>
      
      <div className='mpls6'><a className='mpls2 mpls21' href='/masinagudi' id='pls8' >Masinagudi</a>
      <a className='mpls2 mpls21'  href='/hiddengems' id='pls9'>Hidden Gems</a></div>
       



</div>

<hr className='des26 des16  plshr'></hr>


<div className='tpls1'>
    <div className='tpls2'>
    {slice.map((item,index)=>{
        return(
           

     <Card className="tpls21">
        <Card.Title  className='tpls22' >
                                  
             <div key={index}  className='tpls23' >
                <p  key={item}   onClick={() => handleRedirect(item.slug)} className='fc1'>
                <div className='tpls24'><img src={item.img} ></img></div>
                <div className='tpls25' >{item.name}</div>
                <div className='tpls26'>{item.content}</div>
                </p>
                
                
            </div>
        </Card.Title>
      </Card> 
                    
        )
    })}
</div>


    
<div id="loadmorebtn1">
         {noOfElement < CardData.length && (
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
           <Card.Title  className='tpls22' >
                                  
             <div key={index} className='tpls23 ' >
                <div className='tpls24'><img src={item.img} ></img></div>
                <div className='tpls25'>{item.name}</div>
                <div className='tpls26'>{item.content}</div>
            </div>
        </Card.Title>
      </Card>

        )
    })}
    </div>
    <div  id='loadmorebtn2'> 
    {noOfElement < CardData.length && (
           <button onClick={() => setNoOfElement((prev) => prev + 6)} id="loadmorebtn">
            Load More
           </button>
         )}
    </div>


<Footer/>
</div>
</div>
    </>
  )
}

export default Tplaces



// import React, { useState } from 'react';
// import '../Places/Tplaces.css';
// import { Card } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Navbar2 from '../Navbar2';
// import Footer from '../Footer';
// import { useNavigate } from 'react-router-dom';

// const Tplaces = () => {
//   const navigate = useNavigate();
//   const [noOfElement, setNoOfElement] = useState(6);

//   const CardData=[
//            {
//               id: 1,
//               img:"./Img/des21.svg",
//               name: "Ooty Lake ",
//               content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
//               category: "ooty",
//            },
//            {
//               id: 2,
//               img:"./Img/des21.svg",
//               name: "Botanical Gardens ",
//               content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
//               category: "ooty",
//            },
//            {
//               id: 3,
//               img:"./Img/des21.svg",
//               name: "Doddabetta Peak ",
//               content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
//               category: "ooty",
//            }
//            ,
//            {
//               id: 4,
//               img:"./Img/des21.svg",
//               name: "Nilgiri Mountain Railway ",
//               content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
//               category: "ooty",
//            }
//            ,
//            {
//               id: 5,
//               img:"./Img/des21.svg",
//               name: "Rose Garden ",
//               content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
//               category: "ooty",
//            },
//            {
//               id: 6,
//               img:"./Img/des21.svg",
//               name: "Sim's Park ",
//               content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
//               category: "coonoor",
//            },
//            {
//               id: 7,
//               img:"./Img/des21.svg",
//               name: "Lamb's Rock",
//               content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
//               category: "coonoor",
//            },
//            {
//               id: 8,
//               img:"./Img/des21.svg",
//               name: "Dolphin's Nose",
//               content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
//               category: "coonoor",
//            },
//            {
//             id: 9,
//             img:"./Img/des21.svg",
//             name: "Tea Estates",
//             content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
//             category: "coonoor",
//          },
//          {
//            id: 10,
//            img:"./Img/des21.svg",
//            name: "Needle Rock Viewpoint",
//            content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
//            category: "gudalur",
//         },
//         {
//            id:11,
//            img:"./Img/des21.svg",
//            name: "Frog Hill Viewpoint",
//            content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
//            category: "gudalur",
//         } ,
//         {
//            id: 12,
//            img:"./Img/des21.svg",
//            name: "Kodanad View Point",
//            content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
//            category: "kotagiri",
//         },
//         {
//            id: 13,
//            img:"./Img/des21.svg",
//            name: "Catherine Falls ",
//            content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
//            category: "kotagiri",
//         },
//         {
//            id: 14,
//            img:"./Img/des21.svg",
//            name: "Longwood Shola",
//            content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
//            category: "kotagiri",
//         },
//         {
//            id: 15,
//            img:"./Img/des21.svg",
//            name: "Avalanche Lake ",
//            content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
//            category: "avalanche",
//         },
//         {
//            id: 16,
//            img:"./Img/des21.svg",
//            name: "Sanctuary Avalanche ",
//            content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
//            category: "avalanche",
//         },
//         {
//            id: 17,
//            img:"./Img/des21.svg",
//            name: "Longwood Shola",
//            content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
//            category: "avalanche",
//         },
//         {
//            id: 18,
//            img:"./Img/des21.svg",
//            name: "Jungle Safari ",
//            content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
//            category: "mudumalai",
//         },
//         {
//            id: 19,
//            img:"./Img/des21.svg",
//            name: "Theppakadu Elephant Camp",
//            content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
//            category: "mudumalai",
//         },
//         {
//            id: 20,
//            img:"./Img/des21.svg",
//            name: "Wildlife Safaris",
//            content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
//            category: "masinagudi",
//         },
//         {
//            id: 21,
//            img:"./Img/des21.svg",
//            name: "Birdwatching",
//            content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
//            category: "masinagudi",
//         },
//         {
//            id: 22,
//            img:"./Img/des21.svg",
//            name: "Emerald Lake - A Tranquil Retreat",
//            content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
//            category: "hiddengems",
//         },
        
//          {
//            id: 23,
//            img:"./Img/des21.svg",
//            name: "Upper Bhavani - Untouched Wilderness",
//            content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
//            category: "hiddengems",
//         },
//         {
//          id: 24,
//          img:"./Img/des21.svg",
//          name: "Glenmorgan -Vintage Charm ",
//          content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
//          category: "hiddengems",
//       },
//       {
//        id: 25,
//        img:"./Img/des21.svg",
//        name: "Glenmorgan - Vintage Charm",
//        content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
//        category: "hiddengems",
//     },
//     {
//      id: 26,
//      img:"./Img/des21.svg",
//      name: "Lady Canning's Seat - Panoramic Views ",
//      content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
//      category: "hiddengems",
//    },
//    {
//      id: 27,
//      img:"./Img/des21.svg",
//      name: "Ketti Valley Viewpoint - Expansive Landscapes",
//      content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
//      category: "hiddengems",
//    },
//    {
//      id: 28,
//      img:"./Img/des21.svg",
//      name: "Hidden Valley - Secluded Serenity ",
//      content:"Vivamus pulvinar orci pharetra amet quis. Aliquam arcu id magna scelerisque phasellus at est scelerisque amet.",
//      category: "hiddengems",
//    }
//            ]

//   const slice = CardData.slice(0, noOfElement);

//   const handleRedirect = (id) => {
//     navigate(`/place/${id}`);
//   };

//   return (
//     <>
//      <div className='abu1'>
//       <Navbar2 />
//              <div className='des11'>

//     <div className='pls1'>
//        <a className='pls2a ' href='/tplaces'  id='pls1'>All</a>
//         <a className='pls2 pls21' href='/ooty'  id='pls2'>Ooty</a>
//         <a className='pls2 pls21' href='/coonoor' id='pls3'>Coonoor</a>
//         <a className='pls2 pls21'  href='/gudalur' id='pls4'>Gudalur</a>
//         <a className='pls2 pls21' href='/kotagiri'  id='pls5'>Kotagiri</a>
//         <a className='pls2 pls21' href='/avalanche' id='pls6'>Avalanche</a>
//         <a className='pls2 pls21' href='/mudumalai' id='pls7'>Mudumalai</a>
//         <a className='pls2 pls21' href='/masinagudi' id='pls8' >Masinagudi</a>
//        <a className='pls2 pls21'  href='/hiddengems' id='pls9'>Hidden Gems</a>



//  </div>

//  <div className='mpls1'>
   
//      <div className='mpls3'><a className='mpls2a ' href='/tplaces'  id='pls1'>All</a>
//         <a className='mpls2 mpls21' href='/ooty'  id='pls2'>Ooty</a>
//         <a className='mpls2 mpls21' href='/coonoor' id='pls3'>Coonoor</a></div>
       
//         <div className='mpls4'> <a className='mpls2 mpls21'  href='/gudalur' id='pls4'>Gudalur</a>
//         <a className='mpls2 mpls21' href='/kotagiri'  id='pls5'>Kotagiri</a></div>
     
//        <div className='mpls5'> <a className='mpls2 mpls21' href='/avalanche' id='pls6'>Avalanche</a>
//        <a className='mpls2 mpls21' href='/mudumalai' id='pls7'>Mudumalai</a></div>
      
//        <div className='mpls6'><a className='mpls2 mpls21' href='/masinagudi' id='pls8' >Masinagudi</a>
//       <a className='mpls2 mpls21'  href='/hiddengems' id='pls9'>Hidden Gems</a></div>
       



//  </div>

//  <hr className='des26 des16  plshr'></hr>

//       <div className="tpls1">
//         {slice.map((item) => (
//           <Card className="tpls21" key={item.id}>
//             <Card.Title className="tpls22">
//               <div className="tpls23">
//                 <div className="tpls24">
//                   <img src={item.img} alt={item.name} />
//                 </div>
//                 <div className="tpls25">{item.name}</div>
//                 <div className="tpls26">{item.content}</div>
//                 <button onClick={() => handleRedirect(item.id)}>Go</button>
//               </div>
//             </Card.Title>
//           </Card>
//         ))}
//       </div>

//       <div id="loadmorebtn1">
//         {noOfElement < CardData.length && (
//           <button onClick={() => setNoOfElement((prev) => prev + 6)} id="loadmorebtn">
//             Load More
//           </button>
//         )}
//       </div>

//            <div className='mtpls1'>
//      {slice.map((item,index)=>{
//          return(
//         <Card className="tpls21">
//             <Card.Title  className='tpls22' >
                                  
//               <div key={index} className='tpls23 ' >
//                  <div className='tpls24'><img src={item.img} ></img></div>
//                  <div className='tpls25'>{item.name}</div>
//                  <div className='tpls26'>{item.content}</div>
//              </div>
//          </Card.Title>
//        </Card>

//          )
//      })}
//      </div>
//      <div id="loadmorebtn1">
//         {noOfElement < CardData.length && (
//           <button onClick={() => setNoOfElement((prev) => prev + 6)} id="loadmorebtn">
//             Load More
//           </button>
//         )}
//       </div>      <Footer />
//       </div>
//       </div>
//     </>
//   );
// };

// export default Tplaces;
