import { atom } from "jotai";
import { Film } from "../types";
import { filmsAtom, loadingSideAtom, selectedFilmAtom, Side } from "./atoms";
import axios from "axios";

export const fetchFilmsAtom = atom(null, async (get, set) => {
  try {
    const response = await axios.get("/api/films");
    const films: Film[] = response.data;
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

export const changeLoadingSideAtom = atom(null, (get, set) => {
  const currentLoadingSide = get(loadingSideAtom);

  if (currentLoadingSide === Side.LIGHT) {
    set(loadingSideAtom, Side.DARK);
  } else {
    set(loadingSideAtom, Side.LIGHT);
  }
});
