import Login from "./Pages/Login";
import {Routes,BrowserRouter,Route} from "react-router-dom"
import Episode from "./Pages/Episode";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import ForgetAccount from "./Pages/ForgetAccount";
import StudyRecord from "./Pages/StudyRecord";
import SchoolManagement from "./Pages/SchoolManagement";
import RecordStudy from "./Pages/RecordStudy";
import Event from "./Pages/Event";
import Student from "./Pages/Student";
import ListSchool from "./Pages/ListSchool";
import ListRoom from "./Pages/ListRoom";
import Headers from "./component/Headers";
import Home from "./Pages/Home";
import ClassDetail from "./Pages/ClassDetail";
import ListEventTeacher from "./Pages/ListEventTeacher";
import EventDetail from "./Pages/EventDetail";
import SchoolAdmin from "./Pages/SchoolAdmin";
import ManageStudentrecord from "./Pages/ManageStudentrecord";
import Notifycation from "./Pages/Notifycation";
function App({ language, setLanguage }) {

  return (
    <BrowserRouter>
      <Routes>
        {/* 
        <Route path="/episode" element={<Episode/>}/>
        <Route path="/" element={<ListRoom/>}/> */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/ForgetAccount" element={<ForgetAccount/>}/>
        <Route element={<Home/>}>
          <Route path="/" element={<Notifycation language={language} setLanguage={setLanguage} />}/>
          <Route path="/manageStudentrecord" element={<ManageStudentrecord/>}/>
          <Route path="/schoolAdmin" element={<SchoolAdmin/>}/>
          <Route path="/eventDetail" element={<EventDetail/>}/>
          <Route path="/listEventTeacher" element={<ListEventTeacher/>}/>
          <Route path="/classDetail" element={<ClassDetail/>}/>
          <Route path="/listRoom" element={<ListRoom/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/SchoolManagement" element={<SchoolManagement/>}/>
          <Route path="/studyRecord" element={<StudyRecord/>}/>
          <Route path="/recordStudy" element={<RecordStudy/>}/>
          <Route path="/Event" element={<Event/>}/>
          <Route path="/student" element={<Student/>}/>
          <Route path="/listSchool" element={<ListSchool/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
