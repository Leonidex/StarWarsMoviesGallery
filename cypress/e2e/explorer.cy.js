describe("Main page", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/films", {
      fixture: "films.json",
      delay: 2000,
    }).as("getFilms");

    cy.visit("http://localhost:3000/");
  });

  it("should display loading screen", () => {
    cy.get("[data-testid=loading-screen-backdrop]").should("be.visible");
  });

  it("should display the list of films", () => {
    cy.wait(2000);
    cy.get("[data-testid=loading-screen-backdrop]").should("not.be.visible", {
      timeout: 10000,
    });
    cy.get("[data-testid=film-list]").should("be.visible");
  });

  it("should allow sorting films", () => {
    cy.wait(2000);
    cy.get("[data-testid=loading-screen-backdrop]").should("not.be.visible", {
      timeout: 10000,
    });

    const expectedOrder = [
      "A New Hope",
      "The Empire Strikes Back",
      "Return of the Jedi",
      "The Phantom Menace",
      "Attack of the Clones",
      "Revenge of the Sith",
    ];

    cy.get("[data-testid=sort-select]").click();
    cy.wait(1000);
    cy.get("[data-value=release_date]").click();

    cy.get(".MuiList-root .MuiListItem-root").each((el, index) => {
      // For each list item, assert that its text includes the expected film title
      cy.wrap(el).contains(expectedOrder[index]);
    });
  });
});

describe("Main page with request interception", () => {
  it("should handle error state", () => {
    cy.intercept("GET", "/api/films", { statusCode: 500 }).as("getFilms");
    cy.intercept("GET", "?format=json", { statusCode: 500 }).as("getFilms");

    cy.visit("http://localhost:3000/");

    cy.wait("@getFilms");

    cy.get("[data-testid=error-modal]").should("be.visible");
  });
});
