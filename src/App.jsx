import { BrowserRouter, Routes, Route} from 'react-router';

import GlobalProvider from './state/globalProvider';

import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
  <GlobalProvider>
      <BrowserRouter>
        <div className="app-shell">
          <Navbar/>
          
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer/>
        </div> 
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
