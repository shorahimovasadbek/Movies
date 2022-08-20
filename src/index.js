import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter, Outlet } from 'react-router-dom'
import MoviesP from './components/movies/MoviesP';
import NowPlay from './components/movies/NowPlay';
import Navbar from './components/Navbar';
import Upcom from './components/movies/Upcom'
import TopRated from './components/movies/TopRated'
import Tv_pop from './components/tv_db/Tv_pop'
import Tv_airing from './components/tv_db/Tv_airing'
import Tv_on from './components/tv_db/Tv_on'
import Top_rate from './components/tv_db/Top_rate'
import PeopPop from './components/people/PeopPop'
import Search from './components/search/Search';
import Render from './components/Render';
import Search_One from './components/search/Search_One';
import { Provider } from 'react-redux'
import store from './store/store'
import Favorit from './components/favori_watch/Favorit';
import Watch from './components/favori_watch/Watch';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<App />} />
            <Route path='moviesP' element={<MoviesP />} />
            <Route path='nowPlay' element={<NowPlay />} />
            <Route path='upcom' element={<Upcom />} />
            <Route path='topRated' element={<TopRated />} />
            <Route path='tv_pop' element={<Tv_pop />} />
            <Route path='tv_airing' element={<Tv_airing />} />
            <Route path='tv_on' element={<Tv_on />} />
            <Route path='top_rate' element={<Top_rate />} />
            <Route path='peopPop' element={<PeopPop />} />
            <Route path='favorit' element={<Favorit />} />
            <Route path='watch' element={<Watch />} />
            <Route path='search/:soz' element={<Search />} />
            <Route path='render/:id' element={<Render />} />
            <Route path='search_one/:id' element={<Search_One />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
