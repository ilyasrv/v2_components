import React from 'react';
import "./styles.css";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/main/Main';


// import Buycrypto from './pages/Buycrypto';
// import Business from './pages/Business';
// import Faq from './pages/Faq';
// import Trackorder from './pages/Trackorder';
// import './styles/general.scss';


// ----- Components ----- //

// import { ReviewMy } from './components/Reviews/Review.js'
// import MyForm from './components/FormSub/Formsub.js';
// import Navbar from './components/nav/Navbar.js';
// import { Features } from './components/Features/Features';
// import NavbarSide from './components/Navside/Navside';
// import Navbar from './components/Navbar/Navbar.js';
// import Footer from './components/Footer/Footer';
// import { Modalform } from './components/Modalform/Modalform';






function App() {
	return (
		<React.Fragment>
			<Main />
		</React.Fragment>
	);
}

export default App;

