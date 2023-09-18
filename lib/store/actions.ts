import { atom, Setter } from "jotai";
import { Film } from "../types";
import { filmsAtom, loadingSideAtom, selectedFilmAtom, Side } from "./atoms";
import axios from "axios";

export const fetchFilmsAtom = atom(null, async (get, set) => {
  try {
    const response = await axios.get("/api/films");

    const films: Film[] = response.data;
    set(filmsAtom, films);
  } catch (error) {
    await clientFetchFilms(set);
    console.debug("There was an error fetching the films using API", error);
  }
});

// Using this because the API is very slow and Vercel allows only 10 seconds until the request times-out
const clientFetchFilms = async (set: Setter) => {
  try {
    const response = await axios.get(
      `https://swapi.dev/api/films/?format=json`,
    );

    const films: Film[] = response?.data?.results;
    set(filmsAtom, films);
  } catch (error) {
    console.debug("There was an error fetching the films using client", error);
  }
};

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
