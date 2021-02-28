import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import NavBar from '../Navbar.js'
import TarifCaroussel from '../tarifcaroussel.js'


export default function Tarifs() {
  return (
    <>
    <NavBar />
    <TarifCaroussel />
    <Footer />
    </>
);

}