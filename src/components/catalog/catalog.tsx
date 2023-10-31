import { FilmInfoProps } from '../../types/film-types.ts';
import FilmsList from '../films-list/films-list.tsx';
import GenresList from '../genres-list/genres-list.tsx';
import React from 'react';

type CatalogProps = {
  films: FilmInfoProps[];
};

export default function Catalog({ films }: CatalogProps): React.JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList />
      <FilmsList films={films} />
      <div className="catalog__more">
        <button className="catalog__button" type="button">
          Show more
        </button>
      </div>
    </section>
  );
}
