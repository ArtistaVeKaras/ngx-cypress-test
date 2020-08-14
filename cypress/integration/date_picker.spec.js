describe("date picker", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Datepicker").click();
  });

  it("assert date picker text", () => {
    //invoke method essentially allows you to get the properties of an element
    cy.contains("nb-card", "Common Datepicker")
      .find("input")
      .then((input) => {
        cy.wrap(input).click();
        cy.get("nb-calendar-day-picker").contains("17").click();
        cy.wrap(input)
          .invoke("prop", "value")
          .should("contains", "Aug 17, 2020");

          // get to this link to loop the date
          // https://www.udemy.com/course/cypress-web-automation-testing-from-zero-to-hero/learn/lecture/18179610#overview
      });
  });
});
