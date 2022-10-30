import React from 'react'
import Form from "./component/Form";
import BannerProva from './component/BannerProva';
import Head from './component/Head';
import Background from './images/bg-intro-mobile.png'


import "./App.css";

const App = () => {
  return (
    <div className='contenitore-esterno' style={{ backgroundImage:`url(${Background})`}}>
      <Head/>
      <BannerProva/>
      <Form/>
    </div>
  )
}

export default App