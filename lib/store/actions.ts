import { atom } from "jotai";
import { Film } from "../types";
import { filmsAtom, loadingSideAtom, selectedFilmAtom, Side } from "./atoms";
import axios from "axios";

export const fetchFilmsAtom = atom(null, async (get, set) => {
  try {
    const promises = [
      axios.get("/api/films"),
      axios.get("https://swapi.dev/api/films/?format=json"),
    ];

    const response = await Promise.any(promises);

    const films: Film[] = response?.data?.results;
    set(filmsAtom, films);
  } catch (error) {
    console.debug("There was an error fetching the films", error);
    throw error;
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
