import { expect, Locator, Page } from '@playwright/test';

export class DocsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

//   async navigateTo(targetPage: string): Promise<void> {
//     await this.page.goto(`https://playwright.dev/docs/intro`);
//   }

  async navigateTo(targetPage: string): Promise<void> {
    await this.page.goto(`https://playwright.dev/${targetPage}`);
  }


  async assertCurrentUrlContains(expectedText: 'doc'): Promise<void> {
    const currentUrl = this.page.url();
    expect(currentUrl).toContain(expectedText);
  }

  async assertHeaderText(selector: string, expectedText: 'Installation'): Promise<void> {
    const header = await this.page.locator(selector);
    await expect(header).toHaveText(expectedText);
  }

  async assertElementPresent(selector: string, expectedText?: string): Promise<void> {
    const element = this.page.locator(selector);
    await expect(element).toBeVisible(); // Checks if the element is visible.
    if (expectedText) {
      await expect(element).toHaveText(expectedText); // Optionally check the text
    }

  }
}
