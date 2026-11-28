
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import SecretPin from "./pages/SecretPin";
import AreYouSure from "./pages/AreYouSure";
import MysteryGift from "./pages/MystryGift";
import FunnyMemories from "./pages/FunnyMemories";
import SisterQuiz from "./pages/SisterQuiz";
import SisterAwards from "./pages/SisterAwards";
import SpecialLetter from "./pages/SpecialLetter";
import BirthdayWishes from "./pages/BirthdayWishes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/secret-pin" element={<SecretPin />} />
        <Route path="/are-you-sure" element={<AreYouSure />} />
        <Route path="/mystery-gift" element={<MysteryGift />} />
        <Route path="/funny-memories" element={<FunnyMemories/>}/>
        <Route path="/sister-quiz" element={<SisterQuiz/>}/>
        <Route path="/sister-awards" element={<SisterAwards/>}/>
        <Route path="/special-letter" element={<SpecialLetter/>}/>
        <Route path="/birthday-wishes" element={<BirthdayWishes/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
