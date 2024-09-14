import LoginPage from '../support/pages/LoginPage';

const loginPage = new LoginPage();

describe('Login Test', () => {
    let loginData;

    before(() => {
        // Load the fixture data
        cy.fixture('login').then((data) => {
            loginData = data;
        });
    });

    it('should log in with valid credentials', () => {
        // Visit URL
        cy.visitUrl();

        // Enter valid credentials using fixture data
        loginPage.enterUsername(loginData.username);
        loginPage.enterPassword(loginData.password);

        // Click login Button
        loginPage.clickLoginBtn();

        // Verify successful login by checking for elements only visible after login
        cy.verifyUrlContains('dashboard');
        cy.verifyLeftHandBannerVisible();
    });
});