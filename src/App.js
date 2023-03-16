import { BrowserRouter,Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Resetpassword from "./components/Resetpassword";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Category from "./components/Category";
import Introduce from "./components/Introduce";
import Booking from "./components/Booking";
import History from "./components/History";

function App() {
  return (
    <div className="bg-slate-100 dark:bg-slate-400">
      <ToastContainer></ToastContainer>
      <BrowserRouter>
          <Header/>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/resetpassword" element={<Resetpassword />}></Route>
          <Route path="/category" element={<Category />}></Route>
          <Route path="/introduce" element={<Introduce />}></Route>
          <Route path="/booking" element={<Booking />}></Route>
          <Route path="/history" element={<History />}></Route>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
