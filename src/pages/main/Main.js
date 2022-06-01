import React, { Component } from 'react';
import './main.css';
// import './main.css';


// -------------- Components ------------------ //


// . import { Modalform } from './components/Modalform/Modalform';
import NavbarSide from '../../components/Navside/Navside.js';
import Navbar from '../../components/Navbar/Navbar.js';
import MyForm from '../../components/FormSub/Formsub.js';
import { Features } from '../../components/Features/Features';
import { ReviewMy } from '../../components/Reviews/Review.js';
import Footer from '../../components/Footer/Footer.js';


export default class extends Component {
  render() {
    return (
      <div>
        <NavbarSide />
        <Navbar />
        <MyForm />
        <h2> Our features </h2>
        <Features />
        <h2> User reviews </h2>
        <ReviewMy />
        <Footer />
      </div>
    );
  }
}