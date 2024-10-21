describe('API Test Script for Account Registration', () => {
    const baseUrl = Cypress.env("baseUrl")
    const apiKey = Cypress.env("apiKey")
    it('should register successfully', () => {

        cy.request({
            method: 'POST',
            url: `${baseUrl}/register`,
            headers: {
                'Authorization': `API Key ${apiKey}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: {
                firstname: 'test',
                lastname: 'user',
                email: 'testuser101@gmail.com',
                password: 'Password1',
            },
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.statusText).to.eq('OK')

        });
    });
});