// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
//import Page1 from './pages/Page1';
//import Page2 from './pages/Page2';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

const App = () => (
  <Router>
    <div className="app-container">
      <Header />
      <div className="content">
        <Sidebar />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            {/* Add more routes as needed */}
          </Routes>
        </Main>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
