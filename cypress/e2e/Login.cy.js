it('qore', () => {
    cy.visit('/')

    cy.get('[data-testid="email"]')
        .type('chinedu@enyata.com')

    cy.get('[data-testid="password"]')
        .type('P@ssword01')
      
       
})