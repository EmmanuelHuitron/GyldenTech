import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './home'
import ContactUs from './pages/contact-us'
import WorkWithUs from './pages/work-with-us'
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
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
