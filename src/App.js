
import { useRef } from 'react';

import Header from "./frontend/_Navbar";
import Footer from "./frontend/_Footer";
import HomePage from "./frontend/HomePage";
import AboutPage from "./frontend/AboutPage";
import ProjectsPage from "./frontend/ProjectsPage";
import ContactPage from "./frontend/ContactPage";

function App() {
  const refer = useRef(null);
  const ref = {
    home: useRef(null),
    about: useRef(null),
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
        <section ref={ref.about}><AboutPage/></section>
        <section ref={ref.projects}><ProjectsPage /></section>
        <section ref={ref.contact}><ContactPage/></section>
        <Footer/>
      </div>
  );
};

export default App;
