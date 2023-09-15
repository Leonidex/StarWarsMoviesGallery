import { atom } from "jotai";
import { Film } from "../types";
import { filmsAtom, selectedFilmAtom } from "./atoms";
import axios from "axios";

export const fetchFilmsAtom = atom(null, async (get, set) => {
  try {
    const response = await axios.get("/api/films");
    const films: Film[] = response.data.results;
    set(filmsAtom, films);
  } catch (error) {
    console.error("There was an error fetching the films", error);
  }
});

export const setSelectedFilmAtom = atom(null, (get, set, film: Film) => {
  const currentlySelectedFilm = get(selectedFilmAtom);

  if (film?.episode_id !== currentlySelectedFilm?.episode_id) {
    set(selectedFilmAtom, film);
  } else {
    set(selectedFilmAtom, null);
  }
});
