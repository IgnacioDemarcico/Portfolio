import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
// Páginas:
import Home from './pages/Home'
import Information from './pages/Inoformation'
import Projects from './pages/Projects'
import Favorites from './pages/Favorites'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/information" element={<Information />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/favorites" element={<Favorites />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;