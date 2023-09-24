import React from "react";
import { LoadingScreen } from "./loading-screen";

describe("<LoadingScreen />", () => {
  it("should render and display the Star Wars logo initially", () => {
    cy.mount(<LoadingScreen isLoading={true} />);

    cy.get('[data-testid="loading-screen-backdrop"]').should("be.visible");
    cy.contains("Star Wars").should("be.visible");
  });

  it("should display loading dots and Saber component after animation ends", () => {
    cy.mount(<LoadingScreen isLoading={true} />);

    cy.wait(4000);
    cy.contains("Star Wars").should("not.exist");
    cy.contains("Loading").should("be.visible");
    cy.contains(".").should("be.visible");
  });
});
