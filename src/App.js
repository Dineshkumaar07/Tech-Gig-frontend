import Main from "./pages/Main";
import MobilePhones from "./components/Mobiles/MobilePhones";
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import DetailPage from "./pages/DetailPage";
// import Auth from "./pages/Auth";
function App() {
  return (
    <div className=" py-5 ">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Auth/>} />x`*/}
          <Route path="/" element={<Main/>}/>
          <Route path = "/details" element={<DetailPage/>}/>
        </Routes>
      
      
      </Router>

    </div>
  );
}

export default App;
