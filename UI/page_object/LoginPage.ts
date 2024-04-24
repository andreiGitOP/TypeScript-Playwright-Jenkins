import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly nameFieldLocator: string;
  readonly emailFieldLocator: string;
  readonly signUpButtonLocator: string;
  readonly infoAccTextLocator: Locator;
  readonly titleLocator: string;
  readonly passwordFieldLocator: string;
  readonly firstNameFieldLocator: string;
  readonly lastNameFieldLocator: string;
  readonly addressFieldLocator: string;
  readonly stateFieldLocator: string;
  readonly cityFieldLocator: string;
  readonly zipFieldLocator: string;
  readonly mobileFieldLocator: string;
  readonly daysFieldLocator: string;
  readonly specificDateLocator: string;
  readonly monthsFieldLocator: string;
  readonly yearsFieldLocator: string;
  readonly createAccountButtonLocator: string;
  readonly accCreatedTextLocator: Locator;
  readonly continueButtonLocator: string;
  readonly loggedUserLocator: Locator;
  readonly deleteAccountLocator: string;
  readonly accDeletedTextLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameFieldLocator = "input[data-qa*='signup-name']";
    this.emailFieldLocator = "input[data-qa*='signup-email']";
    this.signUpButtonLocator = "button[data-qa*='signup-button']";
    this.infoAccTextLocator = this.page.locator('//b[text()="Enter Account Information"]');
    this.titleLocator = "label[for*='id_gender1'] ";
    this.passwordFieldLocator = "input[data-qa*='password']";
    this.firstNameFieldLocator = "input[data-qa*='first_name']";
    this.lastNameFieldLocator = "input[data-qa*='last_name']";
    this.addressFieldLocator = "input[data-qa*='address']";
    this.stateFieldLocator = "input[data-qa*='state']";
    this.cityFieldLocator = "input[data-qa*='city']";
    this.zipFieldLocator = "input[data-qa*='zipcode']";
    this.mobileFieldLocator = "input[data-qa*='mobile_number']";
    this.daysFieldLocator = "#days";
    this.monthsFieldLocator = "#months";
    this.yearsFieldLocator = "#years";
    this.specificDateLocator = "#days > option:nth-child(2)";
    this.createAccountButtonLocator = "button[data-qa*='create-account']";
    this.accCreatedTextLocator = this.page.locator("//b[text()='Account Created!']");
    this.continueButtonLocator = "a[data-qa*='continue-button']";
    this.loggedUserLocator = this.page.locator("//b[text()='testTest']");
    this.deleteAccountLocator = "ul >li:nth-child(5)>a";
    this.accDeletedTextLocator =this.page.locator("//b[text()='Account Deleted!']");
  }
}
