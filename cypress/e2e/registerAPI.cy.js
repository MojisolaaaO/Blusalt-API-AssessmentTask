describe('API Test Script for Account Registration', () => {
    const baseUrl = Cypress.env("baseUrl")
    it('should successfully register', () => {

        cy.request({
            method: 'POST',
            url: `${baseUrl}/register`,
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                firstname: 'test',
                lastname: 'user',
                email: 'testuser101@gmail.com',
                password: 'Password1',
            },
        }).then((response) => {
            expect(response.status).to.eq(200)

        });
    });
});