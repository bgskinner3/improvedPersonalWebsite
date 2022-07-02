import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

import { Home, AdminLogin, Footer, CreateProjects, Cards, CreateCards } from './components';



const Routing = () => {
  return (
    <div>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/admin" element={<AdminLogin />} />
          <Route exact path="/adminprojects" element={<CreateProjects />} />
          <Route exact path="/cards" element={<Cards />} />
          <Route exact path="/createcards" element={<CreateCards />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );

}


export default Routing;