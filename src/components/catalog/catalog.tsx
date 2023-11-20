import FilmsList from '../films-list/films-list.tsx';
import GenresList from '../genres-list/genres-list.tsx';
import React, { useCallback, useState } from 'react';
import { useAppSelector } from '../../hooks/store.ts';
import { DEFAULT_FILM_LIST_LENGTH } from '../../consts/film-list.ts';

export default function Catalog(): React.JSX.Element {
  const stateGenreFilms = useAppSelector((state) => state.genreFilms);

  const [listLength, setListLength] = useState(DEFAULT_FILM_LIST_LENGTH);
  const isButtonVisible = stateGenreFilms.length >= listLength;

  const handleClick = useCallback(() => {
    setListLength((prev) => prev + DEFAULT_FILM_LIST_LENGTH);
  }, []);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList />
      <FilmsList length={listLength} />
      {isButtonVisible && (
        <div className="catalog__more">
          <button
            className="catalog__button"
            type="button"
            onClick={handleClick}
          >
            Show more
          </button>
        </div>
      )}
    </section>
  );
}
