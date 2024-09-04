import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navigation/Navigation";
import Partner from "./components/Partners/Partner";
import Categories from "./components/Categories/Categories";
import Courses from "./components/Courses/Courses";
import Discover from "./components/Discover/Discover";
import Achievement from "./components/Achievements/Achievement";
import Faculties from "./components/Faculties/Faculties";
import Form from "./components/Form/Form";
import Home from './pages/Home/Home';
import Hero from "./components/Hero/Hero";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <NavBar/>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/" element={<Discover/>}/>
            <Route path="/" element={<Courses/>}/>
            <Route path="/" element={<Discover/>}/>
            <Route path="/" element={<Faculties/>}/>
            <Route path="/form" element={<Form />}/>
          </Routes>
        </div>
        <Partner/>
        <Categories/>
        <Courses/>
        <Hero />
        <Discover />
        <Achievement/>
        <Faculties />
        <Footer/>
      </Router>

      
    </div>
  );
}

export default App;
