describe('API Test Script for Login', () => {
    const baseUrl = Cypress.env("baseUrl")
    const apiKey = Cypress.env("apiKey")
    it('should login successfully', () => {

        cy.request({
            method: 'POST',
            url: `${baseUrl}/login`,
            headers: {
                'Authorization': `API Key ${apiKey}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
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