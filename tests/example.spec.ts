import { test, expect } from '@playwright/test';
// import { HomePage } from '/Users/ojuolapeolabode/newPW/pages/Homepage.ts';
import { DocsPage } from '../pages/DocsPage';


test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test(`Verify Navigation to Docs`, async ({ page }) => {
  const docsPage = new DocsPage(page); // Initialize the DocsPage object

  // Navigate to the Docs page
  await docsPage.navigateTo('docs/intro');

  // Verify the URL contains '/docs'
  await expect(page).toHaveURL(/.*docs/);

  // Verify the presence of a key element on the Docs page
  // const docsHeader = await page.locator("h1");
  // await expect(docsHeader).toHaveText("Installation");

  // Assert the header text on the Docs page
  // await docsPage.assertHeaderText("h1", "Installation");

  // // Assert the presence of other key elements on the Docs page
  // await docsPage.assertElementPresent("h2", "Getting Started");
  // await docsPage.assertElementPresent("h2", "API Reference");
  // await docsPage.assertElementPresent("h2", "Contributing");
  // await docsPage.assertElementPresent("h2", "FAQ");
  // await docsPage.assertElementPresent("h2", "Changelog");
});

test(`Verify Navigation to Home`, async ({ page }) => {
  const docsPage = new DocsPage(page);; // Initialize the HomePage object

    // // Navigate to the Home page
    await docsPage.navigateTo('');

    // Verify the URL contains '/playwright.dev'
    await expect(page).toHaveURL(/.*playwright.dev/);
  });

  test(`Verify Navigation to API page`, async ({ page }) => {
    const docsPage = new DocsPage(page);; // Initialize the HomePage object

      // Navigate to the Home page
      await docsPage.navigateTo('docs/api/class-playwright');

      // Verify the URL contains '/playwright.dev'
      await expect(page).toHaveURL(/.*api/);
    });


    test(`Verify Navigation to Community page`, async ({ page }) => {
      const docsPage = new DocsPage(page);; // Initialize the HomePage object

        // Navigate to the Home page
        await docsPage.navigateTo('community/welcome');

        // Verify the URL contains '/playwright.dev'
        await expect(page).toHaveURL(/.*community/);
      });
