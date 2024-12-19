import { test, expect } from '@playwright/test';
import { DocsPage } from '../../pages/DocsPage';

test(`Verify Search Functionality`, async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.locator('[placeholder="Search"]').fill('Installation');
    await page.keyboard.press('Enter');
    await expect(page.locator('h1')).toHaveText('Installation'); // Verify result
  });
