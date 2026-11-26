import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin'

// HashRouter keeps routes (and the invite token) after the "#", which GitHub Pages
// can serve without server config and which is never sent to servers.
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join/:token" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </HashRouter>
  )
}
