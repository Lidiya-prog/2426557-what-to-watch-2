import { createReducer } from '@reduxjs/toolkit';
import {ALL_GENRES} from '../consts/genres.ts';
import {getFilmsByGenre, loadFilms, setActiveGenre, setCurrentFilm, setIsLoading, setPromoFilm} from './action.ts';
import {FilmInfoProps, FilmPromo, FilmProps} from '../types/film-types.ts';

type initialState = {
  films: FilmProps[];
  activeGenre: string | typeof ALL_GENRES;
  genreFilms: FilmProps[];
  currentFilm: FilmInfoProps | null;
  promoFilm: FilmPromo | null;
  isLoading: boolean;
}

const initialState: initialState = {
  films: [],
  activeGenre: ALL_GENRES,
  genreFilms: [],
  currentFilm: null,
  promoFilm: null,
  isLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveGenre, (state, action) => {
      const {genre} = action.payload;

      state.activeGenre = genre;
    })
    .addCase(getFilmsByGenre, (state) => {
      state.genreFilms =
      state.activeGenre === ALL_GENRES
        ? state.films
        : state.films.filter((film) => film.genre === state.activeGenre);
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(setCurrentFilm, (state, action) => {
      state.currentFilm = action.payload;
    })
    .addCase(setIsLoading, (state, action) => {
      state.isLoading = action.payload;
    });
});
