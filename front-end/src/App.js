import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import LoggedInNav from './components/LoggedInNav';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Buy from './pages/Buy'
import Sell from './pages/Sell'
import Featured from './pages/Featured';
import Profile from './pages/Profile';
import LoggedInFeatured from './pages/LoggedInFeatured';
import Reset from './pages/reset';
import forgotPassword from './pages/forgot-password';
import ImageUpload from './pages/ImageUpload';
import 'bootstrap/dist/css/bootstrap.css';
import {NextUIProvider} from "@nextui-org/react";


function App() {
  return (
    <>
    <NextUIProvider>
    <Router>
      <Routes>
<Route path="/" element={<Home />} />
<Route path="/signup" element={<SignUp />} />
<Route path="/login" element={<Login />} />
<Route path="/featured" element={<Featured />} />
<Route path="/profile" element={<Profile />} />
<Route path="/sell" element={<Sell />} />
<Route path="/buy" element={<Buy />} />
<Route path="/loggedinfeatured" element={<LoggedInFeatured />} />
<Route path="/reset" element={<Reset />} />
<Route path="/ImageUpload" element={<ImageUpload />} />
<Route path='/forgot-password' element={<forgotPassword />} />
      </Routes>
      </Router>
      </NextUIProvider>
      </>
  );
}

export default App;
