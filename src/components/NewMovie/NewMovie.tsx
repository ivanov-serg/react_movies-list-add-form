import { useState } from 'react';
import { TextField } from '../TextField';

interface Movie {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
}

interface Props {
  onAdd: (movie: Movie) => void;
}
export const NewMovie = ({ onAdd }: Props) => {
  const [movie, setMovie] = useState<Movie>({
    title: '',
    description: '',
    imgUrl: '',
    imdbUrl: '',
    imdbId: '',
  });

  const [count, setCount] = useState(0);
  const isFormValid =
    movie.title.trim() !== '' &&
    movie.imgUrl.trim() !== '' &&
    movie.imdbUrl.trim() !== '' &&
    movie.imdbId.trim() !== '';

  return (
    <form
      className="NewMovie"
      key={count}
      onSubmit={event => {
        event.preventDefault();
        onAdd(movie);
        setCount(count + 1);
      }}
    >
      {' '}
      <h2 className="title">Add a movie</h2>
      <TextField
        name="title"
        label="Title"
        value={movie.title}
        onChange={value => {
          setMovie({
            ...movie,
            title: value,
          });
        }}
        required
      />
      <TextField
        name="description"
        label="Description"
        value={movie.description}
        onChange={value => {
          setMovie({
            ...movie,
            description: value,
          });
        }}
      />
      <TextField
        name="imgUrl"
        label="Image URL"
        value={movie.imgUrl}
        onChange={value => {
          setMovie({
            ...movie,
            imgUrl: value,
          });
        }}
        required
      />
      <TextField
        name="imdbUrl"
        label="Imdb URL"
        value={movie.imdbUrl}
        onChange={value => {
          setMovie({
            ...movie,
            imdbUrl: value,
          });
        }}
        required
      />
      <TextField
        name="imdbId"
        label="Imdb ID"
        value={movie.imdbId}
        onChange={value => {
          setMovie({
            ...movie,
            imdbId: value,
          });
        }}
        required
      />
      <div className="field is-grouped">
        <div className="control">
          <button
            type="submit"
            data-cy="submit-button"
            className="button is-link"
            disabled={!isFormValid}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
