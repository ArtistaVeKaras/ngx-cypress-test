describe("dropdown", () => {
  it("should select an element from the dropdown", () => {
    // perform a single action
    cy.visit("/");
    cy.get(".select-button").click();
    cy.get(".options-list").contains(" Dark").click();

    // assert the background of the header element color is hex format
    cy.get("nb-layout-header.fixed > .fixed").should(
      "have.css",
      "background-color",
      "rgb(34, 43, 69)"
    );
  });

  it.only("looping every single element of the Dropdown", () => {
    cy.visit('/');
    cy.get('nav nb-select').then((dropdown) => {
      cy.wrap(dropdown).click();
          cy.get('.options-list').each((listItem) => {
            const itemText = listItem.text().trim()
            console.log(itemText);

            const colors = {
              Light: "rgb(255, 225, 255)",
              Dark: "rgb(34, 43, 69)",
              Cosmic: "rgb(50, 50, 89)",
              Corporate: "rgb(255 255 255)",
            };

            cy.wrap(listItem)
            .click();
            cy.wrap(dropdown)
            .should("contain", itemText);
            cy.get("nb-layout-header.fixed > .fixed")
            .should("have.css", "background-color", colors[itemText]);
            cy.wrap(dropdown).click();
       });
    });
  });
});
