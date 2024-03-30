import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Featured from './pages/Featured';
import Profile from './pages/Profile';
import LoggedInFeatured from './pages/LoggedInFeatured';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <Routes>
<Route path="/" element={<Home />} />
<Route path="/signup" element={<SignUp />} />
<Route path="/login" element={<Login />} />
<Route path="/featured" element={<Featured />} />
<Route path="/profile" element={<Profile />} />
<Route path="/loggedinfeatured" element={<LoggedInFeatured />} />
      </Routes>
      </Router>
  );
}

export default App;