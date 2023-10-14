import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Heritage from "./pages/Heritage";
import HeritagePlaces from "./pages/HeritagePlaces";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/:cityname" element={<Heritage />} />
          {/* <Route exact path="/:cityname/:name" element={<Heritage />} /> */}
          <Route exact path="/Uttrakhand/:citypoint" element={<HeritagePlaces />} />
        </Routes>
      </BrowserRouter>
    </div>
    // <div>
    //   <Header />
    //   <main>
    //     <Tours />
    //   </main>
    //   <Footer />
    // </div>
  );
}

export default App;
