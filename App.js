import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import FloatinDiv from './components/FloatingDiv/FloatingDiv';
import './App.css';
import Experience from './components/Experience/Experience';
import Testimonial from './components/Testimonials/Testimonial';
import Toggle from './components/Toggle/Toggle';
import Works from './components/Works/Works';
import Footer from './components/Footer/Footer';

function App(){
  return(
    <>
    <Navbar />
    <Portfolio />
    <Services />
    <Experience />
    <FloatinDiv />
    <Testimonial />
    <Toggle />
    <Works />
    <Footer />
    
    </>
  )
}

export default App;