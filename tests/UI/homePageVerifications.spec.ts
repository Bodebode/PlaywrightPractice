import { test, expect } from '@playwright/test';
import { DocsPage } from '../../pages/DocsPage';


test('has title', async ({ page }) => {
await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
await expect(page).toHaveTitle(/Playwright/);
});

test('Verify the get started link', async ({ page }) => {
await page.goto('https://playwright.dev/');

  // Click the get started link.
await page.getByRole('link', { name: 'Get started' }).click();
await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('Verify home page essential elements', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Check if the main navigation bar is visible
  await expect(page.getByRole('navigation')).toBeVisible();

// Check if the footer is visible
await expect(page.getByRole('contentinfo')).toBeVisible();

});



// test(`Verify all links on Home page`, async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   const links = await page.locator('a').all();
//   for (const link of links) {
//     const href = await link.getAttribute('href');
//     if (href) {
//       const [response] = await Promise.all([
//         page.waitForResponse(href),
//         link.click(),
//       ]);
//       expect(response.status()).toBeLessThan(4000); // Check if the link is not broken
//     }
//   }
// });
