describe("checkboxes", () => {
  beforeEach(() => {
    cy.login();
  });

  it("should check the radio buttons", () => {
    // check the first radio button
    // and assert is checked
    cy.contains("nb-card", "Using the Grid")
      .find("[type=radio]")
      .then((radioButton) => {
        cy.wrap(radioButton)
          .first()
          .check({ force: true })
          .should("be.checked");

        // check the second radio button
        // and assert is checked
        cy.wrap(radioButton).eq(1).check({ force: true }).should("be.checked");

        // assert the firs checkbox is not checked
        cy.wrap(radioButton).first().should("not.be.checked");

        // assert the third radio button is disabled
        cy.wrap(radioButton).eq(2).should("be.disabled");
      });
  });

  it.only("check boxes", () => {
    cy.visit('/')
    cy.contains('Modal & Overlays').click()
    cy.contains('Toastr').click()
  })
});
