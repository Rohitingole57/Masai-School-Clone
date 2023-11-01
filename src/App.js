import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import Fees from './Pages/Fees';
import Events from './Pages/Events';
import Learn from './Pages/Learn';
import SuccessStories from './Pages/Success_Stories';
import HireFromUs from './Pages/Hire_From_Us';
import Navbar from './Componants/Navbar';
import Header from './Componants/Header';
import Referral from './Pages/Referral';
function App() {
  return (
    <div className="App">
     <Router>
      <Header/>
        <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/courses" element={<Courses/>} />
        <Route path="/fees" element={<Fees/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/learn" element={<Learn/>} />
        <Route path="/success" element={<SuccessStories/>} />
        <Route path="/hire" element={<HireFromUs/>} />
        <Route path="/referral" element={<Referral/>} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;

