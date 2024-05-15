import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Actors from './pages/Actors';
import Directors from './pages/Directors';
import Movie from './pages/Movie';
import ErrorPage from './pages/ErrorPage'; 

const routes = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/directors" element={<Directors />} />
      <Route path="/actors" element={<Actors />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route path="*" element={<ErrorPage />} />  {/* Route for unmatched routes */}
    </Routes>
  </BrowserRouter>
);

export default routes;