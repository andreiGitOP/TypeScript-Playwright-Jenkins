import { Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly subtitleLocator: Locator;
  readonly loginLocator: string;
  readonly newUserTextLocator: Locator;
  readonly dataUseConsentLocator: string;

  constructor(page: Page) {
    this.page = page;
    this.subtitleLocator = this.page.locator("#slider-carousel > div > div:first-child > div > h2");
    this.loginLocator = "a[href*='login']";
    this.newUserTextLocator = this.page.locator('//h2[text()="New User Signup!"]');
    this.dataUseConsentLocator = '//p[text()="Consent"]';
  }
}
