import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import LandingPage from "./pages/LandingPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sginup" element={<SignupPage/>}/>
          <Route path="/login" element={<LoginPage />} />

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
