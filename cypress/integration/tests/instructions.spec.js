/// <reference types="cypress" />

describe('Instruction API', () => {
  
    it('returns JSON data', () => {
      cy.request('/instructions')
        .its('headers')
        .its('content-type')
        .should('include', 'application/json');
    });

    it('has the correct status code', () => {
        cy.request('/instructions')
        .its('status')
        .should('be.equal', 200);
      });

  });