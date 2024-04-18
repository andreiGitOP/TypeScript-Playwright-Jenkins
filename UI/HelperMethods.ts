import { Locator, Page } from "@playwright/test";

export class HelperMethods {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickSelect(locator: string) {
    await this.page.click(locator);
  }

  async fillField(locator: string, text: string) {
    await this.page.fill(locator, text);
  }
}
