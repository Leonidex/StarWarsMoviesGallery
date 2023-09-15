export interface Film {
  title: string;
  characters: string[];
  created: Date;
  director: string;
  edited: Date;
  episode_id: number;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: Date;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

export enum ResourceTypeEnum {
  FILMS = "FILMS",
  PEOPLE = "PEOPLE",
  STARSHIPS = "STARSHIPS",
  VEHICLES = "VEHICLES",
  SPECIES = "SPECIES",
  PLANETS = "PLANETS",
}
