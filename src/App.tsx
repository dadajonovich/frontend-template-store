import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';

function App() {
  return (
    <main className="mx-auto my-6 w-11/12	rounded-2xl bg-base-300 p-4">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
  );
}

export default App;
