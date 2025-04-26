
import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Navbar from './Components/Mains/Navbar';
import Footer from './Components/Mains/Footer';
import Loadingpage from './Components/Mains/Loadingpage';
import Explore1 from './Components/Mains/Explore1';
import Aboutus from "./Components/Mains/Aboutus";
import Destination3 from "./Components/Mains/Destination3";
import Profile1 from './Components/Mains/Profile1';
import Destination2 from './Components/Mains/Destination2';
import Destination1 from './Components/Mains/Destination1';
import Sidebar from './Components/Mains/Sidebar';
import Navbar2 from './Components/Mains/Navbar2';
import Indi1 from './Components/Mains/Indi1';
import Destination4 from './Components/Mains/Destination4';
import Toda from './Components/Mains/Peoples/Toda';
import Badagas from './Components/Mains/Peoples/Badagas';
import Irula from './Components/Mains/Peoples/Irula';
import Kota from './Components/Mains/Peoples/Kota';
import Kurumba from './Components/Mains/Peoples/Kurumba';
import Tplaces from './Components/Mains/Places/Tplaces';
import PlacesData from './Components/Mains/Places/PlacesData';
import Ooty from './Components/Mains/Places/Ooty';
import Coonoor from './Components/Mains/Places/Coonoor';
import Gudalur from './Components/Mains/Places/Gudalur';
import Kotagiri from './Components/Mains/Places/Kotagiri';
import Avalanche from './Components/Mains/Places/Avalanche';
import Mudumalai from './Components/Mains/Places/Mudumalai';
import Masinagudi from './Components/Mains/Places/Masinagudi';
import Hiddengems from './Components/Mains/Places/Hiddengems';
import Ootylake from './Components/Mains/Sites/Ootysites/Ootylake';
import Botanicalgardens from './Components/Mains/Sites/Ootysites/Botanicalgardens';
import Simspark from './Components/Mains/Sites/Coonooesites/Simspark';
import Doddabettapeak from './Components/Mains/Sites/Ootysites/Doddabettapeak';
import Nilgirimountainrailway from './Components/Mains/Sites/Ootysites/Nilgirimountainrailway';
import Rosegarden from './Components/Mains/Sites/Ootysites/Rosegarden';
import Lambsrock from './Components/Mains/Sites/Coonooesites/Lambsrock';
import Dolphinsnose from './Components/Mains/Sites/Coonooesites/Dolphinsnose';
import Teaestates from './Components/Mains/Sites/Coonooesites/Teaestates';
import Needlerockviewpoint from './Components/Mains/Sites/Gudalur/Needlerockviewpoint';
import Kodanadviewpoint from './Components/Mains/Sites/Kotagiri/Kodanadviewpoint';
import Catherinefalls from './Components/Mains/Sites/Kotagiri/Catherinefalls';
import Longwoodshola from './Components/Mains/Sites/Kotagiri/Longwoodshola';
import Avalanchelake from './Components/Mains/Sites/Avalanche/Avalanchelake';
import Sanctuaryavalanche from './Components/Mains/Sites/Avalanche/Sanctuaryavalanche';
import Longwoodshola2 from './Components/Mains/Sites/Avalanche/Longwoodshola2';
import Junglesafari from './Components/Mains/Sites/Mudumalai/Junglesafari';
import Theppakaduelephantcamp from './Components/Mains/Sites/Mudumalai/Theppakaduelephantcamp';
import Wildlifesafaris from './Components/Mains/Sites/Masinagudi/Wildlifesafaris'
 import Birdwatching from './Components/Mains/Sites/Masinagudi/Birdwatching';
import Emeraldlake from './Components/Mains/Sites/HiddenGems/Emeraldlake'
import Upperbhavani from './Components/Mains/Sites/HiddenGems/Upperbhavani'
import Glenmorgan from './Components/Mains/Sites/HiddenGems/Glenmorgan';
import Ladycanning from './Components/Mains/Sites/HiddenGems/Ladycanning';
import Ketti from './Components/Mains/Sites/HiddenGems/Ketti';
import Hiddenvalley from './Components/Mains/Sites/HiddenGems/Hiddenvalley'
import Sholur from './Components/Mains/Sites/HiddenGems/Sholur';
import Home from './Components/Mains/Destination/Home';
import Layout from './Components/Mains/Destination/Layout';
import Cafe from './Components/Mains/Destination/Cafe';
import Restaurants from './Components/Mains/Destination/Restaurants';
import Stays from './Components/Mains/Destination/Stays';
import Froghillviewpoint from './Components/Mains/Sites/Gudalur/Froghillviewpoint';


const Pages = () => {
  return (
    <BrowserRouter>
    <Routes>

        <Route path='/navbar' element={<Navbar/>}></Route>
        <Route path='/navbar2' element={<Navbar2/>}></Route>
        <Route path='/footer' element={<Footer/>}></Route>
        <Route path='/sidebar' element={<Sidebar/>}></Route>
     

        <Route path='/' element={<Loadingpage/>}></Route>
        <Route path='/explore1' element={<Explore1/>}></Route>
        <Route path='/aboutus' element={<Aboutus/>}></Route>
        <Route path='/destination3' element={<Destination3/>}></Route>
        <Route path='/profile1' element={<Profile1/>}></Route>
        <Route path='/destination1' element={<Destination1/>}></Route>
        <Route path='/destination2' element={<Destination2/>}></Route>
        <Route path='/destination4' element={<Destination4/>}> </Route>
        <Route path='/indi1' element={<Indi1/>}></Route>

        <Route path='/toda' element={<Toda/>}></Route>
        <Route path='/badagas' element={<Badagas/>}></Route>
        <Route path='/irula' element={<Irula/>}></Route>
        <Route path='/kota' element={<Kota/>}></Route>
        <Route path='/kurumba' element={<Kurumba/>}></Route>

        <Route path='/data1' element={<PlacesData/>}></Route>

        {/* <Route path='/places' element={<Places/>}></Route> */}
        <Route path='/tplaces' element={<Tplaces/>}></Route>
        <Route path='/ooty' element={<Ooty/>}></Route>
        <Route path='/coonoor' element={<Coonoor/>}></Route>
        <Route path='/gudalur' element={<Gudalur/>}></Route>
        <Route path='/kotagiri' element={<Kotagiri/>}></Route>
        <Route path='/avalanche' element={<Avalanche/>}></Route>
        <Route path='/mudumalai' element={<Mudumalai/>}></Route>
        <Route path='/masinagudi' element={<Masinagudi/>}></Route>
        <Route path='/hiddengems' element={<Hiddengems/>}></Route>
        {/* <Route path='/allpls' element={<Allplaces/>}></Route> */}


        <Route path='/places/ootylake' element={<Ootylake/>}></Route>
        <Route path='/places/Botanicalgardens' element={<Botanicalgardens/>}></Route>
        <Route path='/places/Doddabettapeak' element={<Doddabettapeak/>}></Route>
        <Route path='/places/Nilgirimountainrailway' element={<Nilgirimountainrailway/>}></Route>
        <Route path='/places/Rosegarden' element={<Rosegarden/>}></Route>

        <Route path='/places/Simspark' element={<Simspark/>}></Route>
        <Route path='/places/Lambsrock' element={<Lambsrock/>}></Route>
        <Route path='/places/Dolphinsnose' element={<Dolphinsnose/>}></Route>
        <Route path='/places/Teaestates'  element={<Teaestates/>}></Route>

        <Route path='/places/Needlerockviewpoint'  element={<Needlerockviewpoint/>}></Route>
        <Route path='/places/Froghillviewpoint'  element={<Froghillviewpoint/>}></Route>

        <Route path='/places/Kodanadviewpoint'  element={<Kodanadviewpoint/>}></Route>
        <Route path='/places/Catherinefalls'  element={<Catherinefalls/>}></Route>
        <Route path='/places/Longwoodshola'  element={<Longwoodshola/>}></Route>
        
        <Route path='/places/Avalanchelake'  element={<Avalanchelake/>}></Route>
        <Route path='/places/Sanctuaryavalanche'  element={<Sanctuaryavalanche/>}></Route>
        <Route path='/places/Longwoodshola2'  element={<Longwoodshola2/>}></Route>


        <Route path='/places/Junglesafari'  element={<Junglesafari/>}></Route>
        <Route path='/places/Theppakaduelephantcamp'  element={<Theppakaduelephantcamp/>}></Route>

        <Route path='/places/Wildlifesafaris'  element={<Wildlifesafaris/>}></Route>
        <Route path='/places/Birdwatching'  element={<Birdwatching/>}></Route>

        <Route path='/places/Emeraldlake'  element={<Emeraldlake/>}></Route>
        <Route path='/places/Upperbhavani'  element={<Upperbhavani/>}></Route>
        <Route path='/places/Glenmorgan'  element={<Glenmorgan/>}></Route>
        <Route path='/places/Sholur'  element={<Sholur/>}></Route>
        <Route path='/places/Ladycanning'  element={<Ladycanning/>}></Route>
        <Route path='/places/Ketti'  element={<Ketti/>}></Route>
        <Route path='/places/Hiddenvalley'  element={<Hiddenvalley/>}></Route>

{/*          
         <Route path='/alldestination' element={<AllDestination/>}> </Route>
         <Route path='/dplaces' element={<Dplaces/>}></Route>
         <Route path='/destinationdata' element={<Destinationdata/>}></Route> */}
          <Route path="/home" element={<Home/>} />
          <Route path="/page/:pageId" element={<Layout/>} /> {/* Dynamic Page Route */}
          <Route path='/cafe' element={<Cafe/>}></Route>
          <Route path='/restaurants' element={<Restaurants/>}></Route>
          <Route path='/stays' element={<Stays/>}></Route>

    </Routes>
    </BrowserRouter>
  )
}

export default Pages