import React from 'react';
// import './styles/general.scss';

// Components
// import Main from './pages/main/Main';
// import { Button } from './components/Button/Button';
import { Appform } from './components/FormNew';
import { ReviewMy } from './components/reviews/Review.js'
import { MyComp } from './components/features/index.js'
import { MyHeader } from './components/header/Header.js';
// import { FeaturesMy } from './components/features/index.jsx';

export function App() {
  return (
    <>
      {/* <Main /> */}
      
      <MyHeader />
      <Appform />    
      <MyComp />
      <ReviewMy />



      
      {/* <Button disableding={true}>Block</Button>
      <Button onClick={(value) => click(value)}>Func</Button> */}
    </>
  );
}