import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Puchases, Home, Login, ProductsDetail } from './pages';
import { LoadingScreen, NavBar } from './components';
import Footer from './components/Footer';
import ProtectedRoutes from './components/ProtectedRoutes';


function App() {

  const isLoading = useSelector(state => state.isLoading)
  return (
    <HashRouter>
      <NavBar />
      {isLoading && <LoadingScreen />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductsDetail />} />
        <Route path="/login" element={<Login />} />
        
        <Route element={<ProtectedRoutes />}>
          <Route path="/purchases" element={<Puchases />} />
        </Route>

      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App;
