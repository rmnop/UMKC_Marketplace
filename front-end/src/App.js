import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import LoggedInNav from './components/LoggedInNav';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Featured from './pages/Featured';
import Profile from './pages/Profile';
import LoggedInFeatured from './pages/LoggedInFeatured';
import Reset from './pages/reset';
import forgotPassword from './pages/forgot-password';
import ImageUpload from './pages/ImageUpload';
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
<Route path="/reset" element={<Reset />} />
<Route path="/ImageUpload" element={<ImageUpload />} />
<Route path='/forgot-password' element={<forgotPassword />} />
      </Routes>
      </Router>
  );
}

export default App;
