/// <reference types="cypress" />

describe('User API', () => {

  it('returns correct status and userID', () => {
    cy.request({
      method: 'GET',
      url: '/user/7'})
      .then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.id).to.equal(7)
    });

  it('returns correct first name', () => {
      cy.request({
        method: 'GET',
        url: '/user/20'})
        .then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.first_name).to.equal(Alard)
      });
    });
  });

});