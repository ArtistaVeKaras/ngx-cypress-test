describe('ToolTip and popus', () => {
  it('assert that tooltip is contains value', () => {
    cy.visit('/')
    cy.contains('Modal & Overlays').click()
    cy.contains('Tooltip').click()

      cy.contains('nb-card', 'Colored Tooltips')
      .contains('Default').click()
      cy.get('nb-tooltip').should('contain','This is a tooltip')

  })
})
