describe("Our first suite", () => {
  beforeEach(() => {
   cy.login()
  })

  it("first test", () => {
    cy.get("[data-cy=imputEmail1]");
    cy.get("#inputPassword2");
  });

  it("second test", () => {
    cy.get("[data-cy=signInbutton]");
    cy.contains("Sign in");
    cy.contains('[status="warning"]', "Sign in");

    //travers child element to parent element
    cy.get(".status-warning")
      .parents("form")
      .find("button")
      .should("contain", "Sign in")
      .parents("form")
      .find("nb-checkbox")
      .click()
      .parents("form")
      .find("#inputEmail3")
      .type("porto");
  });

  it("then and wrap methods", () => {
    cy.contains("nb-card", "Using the Grid").then((firstForm) => {
      const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text();
      const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text();
      expect(emailLabelFirst).to.equal("Email");
      expect(passwordLabelFirst).to.equal("Password");
    });

    //assertions for the Basic form
    // cy.contains('nb-card','Basic form').find('[for="exampleInputEmail1"]').should('contain','Email address')
    // cy.contains('nb-card','Basic form').find('[for="exampleInputPassword1"]').should('contain','Password')

    // best practices for cypress
    // used when trying to avoid repeating
    // the use of the some element
    cy.contains("nb-card", "Basic form").then((secondForm) => {
      const emailLabelFirst = secondForm.find('[for="exampleInputEmail1"]').text();
      const passwordLabelFirst = secondForm.find('[for="exampleInputPassword1"]').text();
      expect(emailLabelFirst).to.equal("Email address");
      expect(passwordLabelFirst).to.equal("Password");

      cy.wrap(secondForm).find('[for="exampleInputEmail1"]').should('contain','Email')
    });
  });

  // invoke method
  it.only('invoke commands', () =>{
    cy.get('[for="exampleInputEmail1"]').should('contain','Email address')

    cy.get('[for="exampleInputEmail1"]').then((label) => {
      expect(label.text()).to.equal('Email address')

      cy.get('[for="exampleInputEmail1"]').invoke('text').then((text) => {
        expect(text).to.equal('Email address')
      })

      cy.contains('nb-card','Basic form')
      .find('nb-checkbox')
      .click()
      .find('.custom-checkbox')
      .should('attr','class')
    })
  })
});
