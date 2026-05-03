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
        © {new Date().getFullYear()} Your Name · Built with React
      </footer>
    </HashRouter>
  );
}
