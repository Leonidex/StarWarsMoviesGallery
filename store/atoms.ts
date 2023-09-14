import { atom } from "jotai";
import { Movie } from "../types";

export const moviesAtom = atom<Movie[]>([]);

export const selectedMovieAtom = atom<Movie | null>(null);
