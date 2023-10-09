import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
// Páginas:
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          {/*<Route path="/catalog" element={<Catalog />}/>*/}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;