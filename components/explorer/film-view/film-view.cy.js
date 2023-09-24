import React from "react";
import { FilmView } from "./film-view";
import { Provider } from "jotai";
import { useHydrateAtoms } from "jotai/utils";
import { selectedFilmAtom } from "../../../lib/store/atoms";

const HydrateAtoms = ({ initialValues, children }) => {
  useHydrateAtoms(initialValues);
  return children;
};

const TestProvider = ({ initialValues, children }) => (
  <Provider>
    <HydrateAtoms initialValues={initialValues}>{children}</HydrateAtoms>
  </Provider>
);

describe("<FilmView />", () => {
  it("should render film information when a film is selected", () => {
    const film = {
      title: "A New Hope",
      episode_id: 4,
      opening_crawl: "It is a period of civil war...",
      director: "George Lucas",
      producer: "Gary Kurtz, Rick McCallum",
      release_date: new Date("1977-05-25").toString(),
    };

    cy.mount(
      <TestProvider initialValues={[[selectedFilmAtom, film]]}>
        <FilmView />
      </TestProvider>,
    );

    // Assert the film information is rendered correctly
    cy.get("h4").contains(film.title);
    cy.contains(`Episode IV`);
    cy.contains(film.opening_crawl);
    cy.contains(`Directed by: ${film.director}`);
    cy.contains(`Produced by: ${film.producer}`);
    cy.contains(`Released at: ${film.release_date}`);
  });

  it('should display "No film selected" when no film is selected', () => {
    cy.mount(
      <TestProvider initialValues={[[selectedFilmAtom]]}>
        <FilmView />
      </TestProvider>,
    );

    // Assert "No film selected" is displayed
    cy.contains("No film selected");
  });
});
