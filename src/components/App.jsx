import { Route, Routes } from "react-router-dom";
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";
import { Movies } from '../pages/Movies/Movies';
import { Home } from '../pages/Home/Home';
import { Layout } from "./Layout/Layout";
import { NotFound } from "./NotFound/NotFound";
// import { Header } from "./Header/Header";
// import { MovieSearch } from "pages/Movies/MovieSearch";

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 20,
      //   color: '#010101'
      // }}
    >
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}/>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          
          
          {/* <Route path="*" element={<NotFound />} />  */}
        </Route>
      </Routes>
      
    </div>
  );
};
