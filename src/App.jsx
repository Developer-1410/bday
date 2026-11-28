
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import SecretPin from "./pages/SecretPin";
import AreYouSure from "./pages/AreYouSure";
import MysteryGift from "./pages/MystryGift";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/secret-pin" element={<SecretPin />} />
        <Route path="/are-you-sure" element={<AreYouSure />} />
        <Route path="/mystery-gift" element={<MysteryGift />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
