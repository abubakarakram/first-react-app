import React from 'react';
import ReactDOM from 'react-dom';
import Body from './components/body/body.js';
import Footer from './components/footer/footer.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar.js';
import Feature from './components/features/Feature.js';
ReactDOM.render(

<div>
  <BrowserRouter>
<Navbar/>,


<Routes>
<Route path="/body" element={<Body/>}></Route>,
<Route path="/feature" element={<Feature/>}></Route>
</Routes>
<Footer></Footer>
</BrowserRouter>
</div>
,
  document.getElementById('root')
);


