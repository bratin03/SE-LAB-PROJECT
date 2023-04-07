import { useNavigate } from "react-router-dom";
import { UilStethoscopeAlt } from '@iconscout/react-unicons'

// import Login from "../components/register";
// import token from "../utils/rough";
const MainPage = () => {

  //   const handleBackClick = () => eventRef.current.scrollIntoView({ behavior: "smooth" });
  let navigate = useNavigate();

  return (
    <div className="main-page">
      <div className="main-header">
        <div className="main-header-sf">
          <UilStethoscopeAlt className="main-header-icon" />OMCS
        </div>
        <div className="main-btns">
          <div className="main-title-btn link" onClick={() => navigate("/omcs/hospitals")}>
            Hospitals
          </div>
          <div className="main-title-btn link" onClick={() => navigate("/omcs/register/doctor")}>
            Doctor Register
          </div>
          <div className="main-title-btn link" onClick={() => navigate("/omcs/register/patient")}>
            Patient Register
          </div>
          <div className="main-title-btn link" onClick={() => navigate("/omcs/login")}>
            Login
          </div>
        </div>

      </div>
      <div className="main-title">

       
        
        <div className="bg_move">
          <i className="fas fa-palette"></i>
          <h1 >Welcome to MedBud</h1>
        </div>
      </div>
        
    </div>
  );
}

export default MainPage;