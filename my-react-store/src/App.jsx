import './App.css';
import Navbar from './components/Navbar';
import Catalog from './pages/Catalog';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="app-shell">
      <Navbar/>
      <Catalog/>
      <Footer/>
    </div> 
  )
}

export default App
