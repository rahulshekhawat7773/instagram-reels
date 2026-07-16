import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./pages/register";
import OTP from "./pages/Otp";
import Videos from "./pages/video";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Register />} />

        <Route path="/otp" element={<OTP />} />

        <Route path="/videos" element={<Videos />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;