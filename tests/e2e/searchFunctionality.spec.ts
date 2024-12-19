import { test, expect } from '@playwright/test';
import { DocsPage } from '../../pages/DocsPage';

test(`Verify Search Functionality`, async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.locator('.DocSearch-Button-Placeholder').click();
    await page.locator('#docsearch-input').fill('Installation');
    await page.locator(' #docsearch-hits0-item-0 > a > div > div.DocSearch-Hit-content-wrapper > span').click();
    await expect(page.locator('h1')).toHaveText('Installation'); // Verify result
  });
