//import logo from './logo.svg';
import './App.css';
import { NavBar } from './Components/NavBar';
//import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from "./Components/Banner";
import  AboutMe  from "./Components/AboutMe";
import { Skills } from "./Components/Skills";
import {Experience} from "./Components/Experience";
import { Projects } from "./Components/Projects";
import { Contact } from "./Components/Contact";
import { ContactDetails } from "./Components/ContactDetails";
import { Footer } from "./Components/Footer";

function NApp() {
  return (
    <>
    <div className="App">
      <NavBar/>
      <Banner/>
      <AboutMe/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      <ContactDetails/>
      <Footer/>
    </div>
    </>
  );
}

export default NApp;
