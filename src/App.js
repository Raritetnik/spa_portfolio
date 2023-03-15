
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Header from "./frontend/_Navbar";
import Footer from "./frontend/_Footer";
import HomePage from "./frontend/HomePage";
import AboutPage from "./frontend/AboutPage";
import ProjectsPage from "./frontend/ProjectsPage";
import ContactPage from "./frontend/ContactPage";

export default function App() {
  return (
      <div className="App">
        <Header />
        {/*<Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/projects' element={<ProjectsPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
        </Routes>*/}
        <HomePage/>
        <AboutPage/>
        <ProjectsPage/>
        <ContactPage/>
        <Footer/>
      </div>
  );
};
