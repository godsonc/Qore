it('gabbi health', () => {
    cy.visit('/')
    
    cy.get('[data-testid="test-emailAddress"]')
       .type('chinedu@enyata.com')

    cy.get('[data-testid="test-password"]')
      .type('P@ssword01')
      
       
})