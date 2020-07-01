/// <reference types="cypress" />

describe('User API', () => {
  
    it('should return correct userID successfully', () => {
      cy.request({
        method: 'GET',
        url: '/user/7',
        body: {
          id: 7,
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.id).to.equal(7);
      });
    });
  
    it('should return first name successfully', () => {
        cy.request({
          method: 'GET',
          url: '/user/20',
          body: {
            id: 20,
          },
        }).then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body.first_name).contain('Alard')
        });
      });
    
      it('should return city of the user successfully', () => {
        cy.request({
          method: 'GET',
          url: '/user/17',
          body: {
            id: 17,
          },
        }).then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body.city).contain('Labansari')
        });
      });
  });
  