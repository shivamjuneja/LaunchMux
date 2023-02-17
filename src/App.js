import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Stake from './stake/Stake';
import Redeem from './components/Redeem';
import TradePage from './trade/TradePage'
import LeaderBoard from './pages/LeaderBoard';
import Liquidity from './pages/Liquidity';

import LiquidityCard from './components/LiquidityCard';
import PieChart from './components/PieChart';
import AboutMCB from "./stake/AboutMCB";
import VeMux from "./stake/VeMux";
function App() {
  return (
   
    <Router>
      <Routes>
          <Route exact path="/" element={<TradePage />} />
          <Route exact path="/Liquidity" element={<Liquidity />} />
          <Route exact path="/LeaderBoard" element={<LeaderBoard />} />
          <Route exact path="/Stake" element={<Stake />} />
          <Route exact path="/Redeem" element={<Redeem />} />
          <Route exact path="/aboutmcb" element={<AboutMCB />} />
          <Route exact path="/vemux" element={<VeMux />} />
      </Routes>
    </Router>

  );
}

export default App;
