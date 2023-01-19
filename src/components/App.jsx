import { Route, Routes } from "react-router-dom";
// import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
// import { Cast } from "./Cast/Cast";
// import { Reviews } from "./Reviews/Reviews";
// import { Movies } from '../pages/Movies/Movies';
// import { Home } from '../pages/Home/Home';
// import { Layout } from "./Layout/Layout";

// import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));


export const App = () => {
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}/>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
      </Suspense>
    </div>
  );
};
