import crlogo from './images/logocr.png';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import About from './sections/About';
import Highlights from './sections/Highlights';
import Features from './sections/features';
import Testimonials from './sections/Testimonial';
import Footer from './components/footer';
import NavBar from './components/Navigation';
import Carousel from './components/Carousel';
import {slides} from './data/Carousel.json';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App bg-[#571260]">
      <Routes>
          <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
        <Header/>
       <NavBar/>
       <Carousel data={slides}/>
        <div className='flex flex-col'>
          <About/>
          <Highlights/>
           <Features/>
           <Testimonials/>
           <Footer/>
           
        </div>
    </div>
  );
}

export default App;
