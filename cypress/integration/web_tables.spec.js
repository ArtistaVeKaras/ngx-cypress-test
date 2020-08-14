describe("Web Tables", () => {
  it("update the table", () => {
    cy.visit("/");
    cy.contains("Tables & Data").click();
    cy.contains("Smart Table").click();

    // example 1
    // edit an element and assert value
    cy.get("tbody")
      .contains("tr", "Larry")
      .then((tableRow) => {
        cy.wrap(tableRow).find(".nb-edit").click();
        cy.wrap(tableRow)
          .find("[placeholder='Age']")
          .clear()
          .type("25 {enter}");
        cy.wrap(tableRow).find("td").eq(6).should("have.text", "25 ");

        //example 2
        //insert elements and assert value
        cy.get("thead").find(".nb-plus").click();
        cy.get("thead")
          .find("tr")
          .eq(2)
          .then((tableRow) => {
            cy.wrap(tableRow)
              .find('[placeholder="First Name"]')
              .type("Claudio");
            cy.wrap(tableRow).find('[placeholder="Last Name"]').type("Corr");
            cy.wrap(tableRow).find(".nb-checkmark").click();
          });
        // assert table contains values
        cy.get("tbody tr")
          .first()
          .find("td")
          .then((tableColumns) => {
            cy.wrap(tableColumns).eq(2).should("contain", "Claudio");
            cy.wrap(tableColumns).eq(3).should("contain", "Corr");
          });

        // example 3
        // types 20 in the text field and
        // iterate each element to assert
        // all columns contains 20
        cy.get('[placeholder="Age"]').type(20);
        cy.wait(500);
        cy.get("tbody tr").each((tableRow1) => {
          cy.wrap(tableRow1).find("td").eq(6).should("contain", 20);
        });

        // example 4
        // the some as above
        //but in a loop
        const age = [20, 30, 40, 200];

        cy.wrap(age).each((age) => {
          cy.get('[placeholder="Age"]').clear().type(age);
          cy.wait(500);
          cy.get("tbody tr").each((tableRow1) => {
            if (age == 200) {
              cy.wrap(tableRow1).should("contain", "No data found");
            } else {
              cy.wrap(tableRow1).find("td").eq(6).should("contain", age);
            }
          });
        });
      });
  });
});
