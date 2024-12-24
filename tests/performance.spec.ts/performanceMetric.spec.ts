import { test, expect } from '@playwright/test';
import { DocsPage } from '../../pages/DocsPage';

test(`Verify Page Load Performance`, async ({ page }) => {
    const startTime = Date.now();
    await page.goto('https://playwright.dev/');
    const endTime = Date.now();
    expect(endTime - startTime).toBeLessThan(3000); // Example: 3 seconds
  });
test(`Verify DocsPage Load Performance`, async ({ page }) => {
    const docsPage = new DocsPage(page);
    const startTime = Date.now();
    await docsPage.goto();
    const endTime = Date.now();
    expect(endTime - startTime).toBeLessThan(3000); // Example: 3 seconds
});
