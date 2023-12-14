describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://tvplayer.com')
  })
})
cy.contains('button')
})
})
describe('My First Test', () => {
    it('clicks the link "button"', () => {
      cy.visit('https://tvplayer.com')
  
      cy.contains('data-qa').click()
    })
  })
  describe('My First Test', () => {
    it('clicking "button" navigates to a new url', () => {
      cy.visit('https://tvplayer.com')
  
      cy.contains('button').click()
  
      // Should be on a new URL which
      // includes '/commands/actions'
      cy.url().should('include', '/commands/actions')
    })
  })
  describe('My First Test', () => {
    it('Gets, types and asserts', () => {
      cy.visit('https://example.cypress.io')
  
      cy.contains('type').click()
  
      // Should be on a new URL which
      // includes '/commands/actions'
      cy.url().should('include', '/commands/actions')
  
      // Get an input, type into it
      cy.get('.action-email').type('fake@email.com')
  
      //  Verify that the value has been updated
      cy.get('.action-email').should('have.value', 'fake@email.com')
    })
  })