import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './home'
import ContactUs from './contact-us'
import WorkWithUs from './work-with-us'
import TerminosCondiciones from './components/Footer/TerminosCondiciones'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="work-with-us" element={<WorkWithUs />} />
          <Route path="terms&conditions" element={<TerminosCondiciones />}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
