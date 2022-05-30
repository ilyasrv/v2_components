import React from 'react';
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Buycrypto from './pages/Buycrypto';
// import Business from './pages/Business';
// import Faq from './pages/Faq';
// import Trackorder from './pages/Trackorder';
// import './styles/general.scss';

// Components

import { ReviewMy } from './components/reviews/Review.js'
import MyForm from './components/formsub/index.js';
// import Navbar from './components/nav/Navbar.js';
import { Features } from './components/features/Features.js';
import NavbarSlide from './components/side/side';
import Navbar from './components/nav/Navbar';
import Footer from './components/footer/Footer';

export function App() {
  return (
    <>
      <Router>
        <NavbarSlide />
        <Navbar />
        {/* <Switch>
          <Route path='/buycrypto' component={Buycrypto} />
          <Route path='/business' component={Business} />
          <Route path='/trackorder' component={Trackorder} />
          <Route path='/faq' component={Faq} />
        </Switch> */}
        <MyForm />
        <div className="._container ">
          <h2> Our features </h2>
          <Features />

          <h2> User reviews </h2>
          <ReviewMy />
        </div>

<Footer />
      </Router>
    </>
  );
}

