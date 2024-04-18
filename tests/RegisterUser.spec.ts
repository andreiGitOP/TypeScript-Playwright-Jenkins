import { test, expect } from '@playwright/test';
import {HomePage} from '../UI/HomePage'
import { HelperMethods } from '../UI/HelperMethods';
import { LoginPage } from '../UI/LoginPage';
import { log } from 'console';

test('Create and delete account', async ({page}) =>{
    
    await page.goto("./");

    const homePage = new HomePage(page);
    const helperMethods = new HelperMethods(page);
    const loginPage = new LoginPage(page);

    await expect(homePage.subtitleLocator).toHaveText('Full-Fledged practice website for Automation Engineers');
    await helperMethods.clickSelect(homePage.loginLocator);
    await expect(homePage.newUserTextLocator).toHaveText('New User Signup!');

    await helperMethods.fillField(loginPage.nameFieldLocator, 'testTest');
    await helperMethods.fillField(loginPage.emailFieldLocator, 'testTest@testing.com');
    await helperMethods.clickSelect(loginPage.signUpButtonLocator);
    await expect(loginPage.infoAccTextLocator).toHaveText("Enter Account Information");
})