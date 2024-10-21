describe('API Test Script for Login', () => {
    const baseUrl = Cypress.env("baseUrl")
    it('should successfully register', () => {

        cy.request({
            method: 'POST',
            url: `${baseUrl}/login`,
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                email: 'testuser101@gmail.com',
                password: 'Password1',
            },
        }).then((response) => {
            expect(response.status).to.eq(200)

        });
    });
});