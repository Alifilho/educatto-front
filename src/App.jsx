import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer"
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Subjects from "./pages/Subjects";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div className="w-full h-full">
      <Router>
        <Header />
        <div className="h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/materias" element={<Subjects />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
