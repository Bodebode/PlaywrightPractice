import { test, expect } from '@playwright/test';
import { DocsPage } from '../pages/DocsPage';


test(`Verify Navigation to Docs`, async ({ page }) => {
    const docsPage = new DocsPage(page); // Initialize the HomePage object

    // Navigate to the Docs page
    await docsPage.navigateTo('');
    await expect(page).toHaveURL(/.*playwright/);


    // Verify the URL contains '/docs'
    // await homePage.assertCurrentUrlContains(docsPage);

    // Verify the presence of a key element on the Docs page.
    // const docsHeader = await page.locator("h1");
    // await expect(docsHeader).toHaveText("Documentation"); // Adjust expected text if needed

    });
