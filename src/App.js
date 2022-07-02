import React from 'react';
import './App.css';
import Routing from './Routing';
import { NavBar } from './components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './components/Loading';


function App() {
  return (
    <div className="App bg-white">
      <NavBar />
      <ToastContainer />
      <Routing />
    </div>
  );
}

export default App;
