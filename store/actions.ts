import { atom } from "jotai";
import { Movie } from "../types";
import { moviesAtom, selectedMovieAtom } from "./atoms";
import axios from "axios";

export const fetchMoviesAtom = atom(null, async (get, set) => {
  try {
    const response = await axios.get("/api/movies");
    const movies: Movie[] = response.data.results;
    set(moviesAtom, movies);
  } catch (error) {
    console.error("There was an error fetching the movies", error);
  }
});

export const setSelectedMovieAtom = atom(null, (get, set, movie: Movie) => {
  const currentlySelectedMovie = get(selectedMovieAtom);

  if (movie?.episode_id !== currentlySelectedMovie?.episode_id) {
    set(selectedMovieAtom, movie);
  } else {
    set(selectedMovieAtom, null);
  }
});
