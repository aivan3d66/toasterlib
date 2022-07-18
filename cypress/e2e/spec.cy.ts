describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('ToastsList', () => {
  it('toasts list is visible', () => {
    cy
      .visit('/')
      .get('#modal-root').should('be.visible')
  })
})
