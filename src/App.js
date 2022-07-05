import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/home'
import ContactUs from './pages/contact-us'
import WorkWithUs from './pages/work-with-us'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="work-with-us" element={<WorkWithUs />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
