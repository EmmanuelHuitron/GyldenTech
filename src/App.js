import React, {useEffect} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
