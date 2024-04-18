import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly nameFieldLocator: string;
  readonly emailFieldLocator: string;
  readonly signUpButtonLocator: string;
  readonly infoAccTextLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameFieldLocator = "input[data-qa*='signup-name']";
    this.emailFieldLocator = "input[data-qa*='signup-email']";
    this.signUpButtonLocator = "button[data-qa*='signup-button']";
    this.infoAccTextLocator = this.page.locator('//b[text()="Enter Account Information"]');
  }
}
