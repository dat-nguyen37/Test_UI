import Login from "./Pages/Login";
import {Routes,BrowserRouter,Route} from "react-router-dom"
import Episode from "./Pages/Episode";
import Profile from "./Pages/Profile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/episode" element={<Episode/>}/>
        <Route path="/" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
