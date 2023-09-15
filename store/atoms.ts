import { atom } from "jotai";
import { Film } from "../types";

export const filmsAtom = atom<Film[]>([]);

export const selectedFilmAtom = atom<Film | null>(null);
