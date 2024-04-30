import { Locator, Page } from "@playwright/test";

export class HelperMethods {
  readonly page: Page;
  readonly dataUseConsentLocator: string = '//p[text()="Consent"]'
  
  constructor(page: Page) {
    this.page = page;
  }

  async clickSelect(locator: string) {
    await this.page.click(locator);
  }

  async fillField(locator: string, text: string) {
    await this.page.fill(locator, text);
  }

  async acceptCookies() {
    try {
      console.log("Accepting cookies");
      await this.page.waitForSelector(this.dataUseConsentLocator, { timeout: 3000 });
      await this.page.locator(this.dataUseConsentLocator).click();
    } catch (TimeoutError) {
      console.log("No cookies to accept.");
    }
  }
}
