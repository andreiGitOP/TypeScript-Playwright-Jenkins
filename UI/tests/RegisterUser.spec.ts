import { test, expect } from '@playwright/test';
import {HomePage} from '../HomePage'
import { LoginPage } from '../LoginPage';
import { HelperMethods } from '../../HelperMethods';

test('Create and delete account', async ({ page }) =>{
    
    await page.goto("./");

    const homePage = new HomePage(page);
    const helper = new HelperMethods(page);
    const loginPage = new LoginPage(page);

    await expect(homePage.subtitleLocator).toHaveText('Full-Fledged practice website for Automation Engineers');
    await helper.clickSelect(homePage.loginLocator);
    await expect(homePage.newUserTextLocator).toHaveText('New User Signup!');

    await helper.fillField(loginPage.nameFieldLocator, 'testTest');
    await helper.fillField(loginPage.emailFieldLocator, 'testTest@testing.com');
    await helper.clickSelect(loginPage.signUpButtonLocator);
    await expect(loginPage.infoAccTextLocator).toHaveText("Enter Account Information");

    await helper.clickSelect(loginPage.titleLocator);
    await helper.fillField(loginPage.passwordFieldLocator, 'parola');    
    await helper.fillField(loginPage.firstNameFieldLocator, 'John');
    await helper.fillField(loginPage.lastNameFieldLocator, 'Doe');
    await helper.fillField(loginPage.addressFieldLocator, 'adresa');
    await helper.fillField(loginPage.stateFieldLocator, 'AG');
    await helper.fillField(loginPage.cityFieldLocator, 'Pitesti');
    await helper.fillField(loginPage.zipFieldLocator, '1234');
    await helper.fillField(loginPage.mobileFieldLocator, '1234');
    await helper.clickSelect(loginPage.createAccountButtonLocator);
    await expect(loginPage.accCreatedTextLocator).toHaveText("Account Created!");
    await helper.clickSelect(loginPage.continueButtonLocator);
    await expect(loginPage.loggedUserLocator).toHaveText("testTest");

    await helper.clickSelect(loginPage.deleteAccountLocator);
    await expect(loginPage.accDeletedTextLocator).toHaveText("Account Deleted!");
    await helper.clickSelect(loginPage.continueButtonLocator);    
})