import Login from "./Pages/Login";
import {Routes,BrowserRouter,Route} from "react-router-dom"
import Episode from "./Pages/Episode";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import ForgetAccount from "./Pages/ForgetAccount";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/ForgetAccount" element={<ForgetAccount/>}/>
        <Route path="/episode" element={<Episode/>}/>
        <Route path="/" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
