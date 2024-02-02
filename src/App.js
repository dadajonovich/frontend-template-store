import { Routes, Route } from 'react-router-dom';
import useTheme from './hooks/useTheme';

import Header from './components/header/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import Footer from './components/footer/Footer';

function App() {
  const [elementRef, setTheme] = useTheme();
  console.log('Render App');

  return (
    <div className='container' ref={elementRef}>
      <Header {...{ setTheme }} />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
