
import { useRef } from 'react';

import Header from "./frontend/_Navbar";
import Footer from "./frontend/_Footer";
import HomePage from "./frontend/HomePage";
import AboutPage from "./frontend/AboutPage";
import ProjectsPage from "./frontend/ProjectsPage";
import ContactPage from "./frontend/ContactPage";
import Formation from "./frontend/Formation";
import Competences from "./frontend/Competences";

function App() {
  const ref = {
    home: useRef(null),
    about: useRef(null),
    formation: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  const handleClick = (e) => {
    ref[e.target.dataset.scroll].current.scrollIntoView({behavior: 'smooth', block: 'start'});
  };

  return (
      <div className="App">
        <Header onMenuClick={handleClick}/>
        <section ref={ref.home}><HomePage/></section>
        <div ref={ref.competence} className='block'><Competences /></div>
        <section ref={ref.about}><AboutPage/></section>
        <section ref={ref.formation}><Formation/></section>
        <section ref={ref.contact}><ContactPage/></section>
        <Footer/>
      </div>
  );
};

export default App;
