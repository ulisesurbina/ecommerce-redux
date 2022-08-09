import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Home, Login, ProductsDetail, Purchases } from './pages';
import { Footer, LoadingScreen, NavBar, ProtectedRoutes } from './components';




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
          <Route path="/purchases" element={<Purchases />} />
        </Route>

      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App;
