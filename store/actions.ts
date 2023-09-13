import { atom } from "jotai";
import { Movie } from "../types";
import { moviesAtom } from "./atoms";
import axios from "axios";

export const fetchMoviesAtom = atom(null, async (get, set) => {
  try {
    const response = await axios.get("/api/movies");
    console.log("response.data.results:", response.data.results);
    const movies: Movie[] = response.data.results;
    set(moviesAtom, movies);
  } catch (error) {
    console.error("There was an error fetching the movies", error);
  }
});
