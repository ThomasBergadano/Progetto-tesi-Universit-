import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Header from '../components/HeaderComponent'
import Footer from '../components/FooterComponent'
import Home from '../pages/HomePage.jsx'
import About from '../pages/AboutPage.jsx'
import CatalogoProdotti from '../pages/CatalogoProdottiPage.jsx'
import IdeeSpunti from '../pages/IdeeSpuntiPage.jsx'
import AssistenzaClienti from '../pages/AssistenzaClientiPage.jsx'
import Dashboard from '../pages/DashboardPage.jsx'
import Login from '../pages/LoginPage.jsx'
import Signup from '../pages/SignupPage.jsx'
import Profilo from '../pages/ProfilePage.jsx'
import Wishlist from '../pages/WishlistPage.jsx'
import Carrello from '../pages/CarrelloPage.jsx'

function RoutingComponents(){
  const location = useLocation();
  const nascondiHeaderFooter = ['/Login', '/Signup'].includes(location.pathname);

  return(
    <>
      {!nascondiHeaderFooter && <Header/>}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/ChiSiamo" element={<About/>}></Route>
        <Route path="/CatalogoProdotti" element={<CatalogoProdotti/>}></Route>
        <Route path="/Idee" element={<IdeeSpunti/>}></Route>
        <Route path="/AssistenzaClienti" element={<AssistenzaClienti/>}></Route>
        <Route path="/Dashboard" element={<Dashboard/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/Profilo" element={<Profilo/>}></Route>
        <Route path="/Wishlist" element={<Wishlist/>}></Route>
        <Route path="/Carrello" element={<Carrello/>}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {!nascondiHeaderFooter && <Footer/>}
    </>
  )
}

export default RoutingComponents;