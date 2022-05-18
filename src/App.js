import React, {useEffect} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home";
import scrollreveal from "scrollreveal";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  useEffect(() => {
    const srtitle = scrollreveal({
      origin: "bottom",
      distance: "100px",
      duration: 1500,
      reset: false
    });
    srtitle.reveal(
      `.sec-title,
      .title-certificate`
    )

    const srcards = scrollreveal({
      origin: "top",
      distance: "100px",
      duration: 3000,
      reset: false
    });
    srcards.reveal(
      `.scroll-card`
    )
    const generalRight = scrollreveal({
      origin: "right",
      distance: "100px",
      duration: 2000,
      reset: false
    });
    generalRight.reveal(
      `.text-description`
    )
    

  }, [])
  
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
