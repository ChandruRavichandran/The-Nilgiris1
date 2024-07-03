
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

const Pages = () => {
  return (
    <BrowserRouter>
    <Routes>

        <Route path='/navbar' element={<Navbar/>}></Route>
        <Route path='/footer' element={<Footer/>}></Route>
        <Route path='/sidebar' element={<Sidebar/>}></Route>
     

        <Route path='/' element={<Loadingpage/>}></Route>
        <Route path='/explore1' element={<Explore1/>}></Route>
        <Route path='/aboutus' element={<Aboutus/>}></Route>
        <Route path='/destination3' element={<Destination3/>}></Route>
        <Route path='/profile1' element={<Profile1/>}></Route>
        <Route path='/destination1' element={<Destination1/>}></Route>
        <Route path='/destination2' element={<Destination2/>}></Route>

    </Routes>
    </BrowserRouter>
  )
}

export default Pages