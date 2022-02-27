import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginYoonkyeong from './pages/yoonkyeong/Login/Login';
import MainYoonkyeong from './pages/yoonkyeong/Main/Main';
import LoginDaeyeong from './pages/daeyeong/Login/Login';
import MainDaeyeong from './pages/daeyeong/Main/Main';
import LoginJoonyoung from './pages/joonyoung/Login/Login';
import MainJoonyoung from './pages/joonyoung/Main/Main';
import LoginHyeonze from './pages/hyeonze/Login/Login';
import MainHyeonze from './pages/hyeonze/Main/Main';
import Navbar from './components/Navbar';
import './styles/common.scss';
import './styles/reset.scss';

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* 윤경님 */}
        <Route path="/login-yoonkyeong" element={<LoginYoonkyeong />} />
        <Route path="/main-yoonkyeong" element={<MainYoonkyeong />} />

        {/* 대영님 */}
        <Route path="/login-daeyeong" element={<LoginDaeyeong />} />
        <Route path="/main-daeyeong" element={<MainDaeyeong />} />

        {/* 현재님 */}
        <Route path="" element={<LoginHyeonze />} />
        <Route path="/main-hyeonze" element={<MainHyeonze />} />

        {/* 준영님 */}
        <Route path="/login-joonyoung" element={<LoginJoonyoung />} />
        <Route path="/main-joonyoung" element={<MainJoonyoung />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
