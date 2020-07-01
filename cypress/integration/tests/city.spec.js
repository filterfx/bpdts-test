/// <reference types="cypress" />

describe('City API', () => {

    it('returns JSON data', () => {
      cy.request('/city/sheffield/users')
        .its('headers')
        .its('content-type')
        .should('include', 'application/json');
    });

    it('has the correct status code', () => {
        cy.request('/city/leeds/users')
        .its('status')
        .should('be.equal', 200);
      });
    
    it('returns correct content length', () => {
        cy.request('/city/london/users')
          .its('headers')
          .its('content-length')
          .should('include', '3');
      });

    });