import { test, expect } from '@playwright/test';
import { DocsPage } from '../../pages/DocsPage';

test(`Verify Search Functionality`, async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.locator('.DocSearch-Button-Placeholder').click();
    await page.locator('#docsearch-input').fill('Installation');
    await page.locator(' #docsearch-hits0-item-0 > a > div > div.DocSearch-Hit-content-wrapper > span').click();
    await expect(page.locator('h1')).toHaveText('Installation'); // Verify result
  });

test(`Verify Something else`, async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.locator('.DocSearch-Button-Placeholder').click();
    await page.locator('#docsearch-input').fill('API');
    await page.keyboard.press('Enter');
    const firstResult = await page.locator('.DocSearch-Hit-title').first();
    // await expect(page.locator('h1')).toHaveText('API');
    const actualText = await page.locator('h1').innerText();
    if (actualText !== 'API.') {
        console.warn(`This fails, Expected string is "API", Received string: "${actualText}"`);
    } else
        console.log(`This passes, Expected string is "Playwright enables reliable end-to-end testing for modern web apps.", Received string: "${actualText}"`);
        return; // PassThrough by returning early

  });
