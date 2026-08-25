import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './components.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Publications from './pages/Publications';

export default function App() {
  return (
    <HashRouter>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publications />} />
        </Routes>
      </main>
      <footer>
        © {new Date().getFullYear()} Wei-Ning Chiu's website · Built with React
      </footer>
    </HashRouter>
  );
}
