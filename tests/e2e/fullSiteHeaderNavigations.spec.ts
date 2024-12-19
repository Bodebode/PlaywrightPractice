import { test, expect } from '@playwright/test';
import { DocsPage } from '../../pages/DocsPage';

/*TESTS AND VERIFIES THE ENTIRE WEBSITES BASIC HEADER NAVIGATIONS*/

test(`Verify Navigation Consistency`, async ({ page }) => {
    const docsPage = new DocsPage(page);
    await docsPage.navigateTo('');
    await expect(page).toHaveURL(/playwright.dev/);
    await docsPage.navigateTo('docs/intro');
    await expect(page).toHaveURL(/docs/);
    await docsPage.navigateTo('community/welcome');
    await expect(page).toHaveURL(/community/);
  });


test(`Verify Navigation to Docs`, async ({ page }) => {
    const docsPage = new DocsPage(page); // Initialize the DocsPage object

    // Navigate to the Docs page and verifies it is indeed the Docs page
    await docsPage.navigateTo('docs/intro');
    await expect(page).toHaveURL(/.*docs/);
    const docsHeader = await page.locator("h1");
    await expect(docsHeader).toHaveText("Installation");
    });

test(`Verify Navigation to Home`, async ({ page }) => {
    const docsPage = new DocsPage(page);; // Initialize the HomePage object

    // Navigate to the Home page
    await docsPage.navigateTo('');
    await expect(page).toHaveURL(/.*playwright.dev/);
    });


test(`Verify Navigation to API page`, async ({ page }) => {
      const docsPage = new DocsPage(page);; // Initialize the HomePage object

    // Navigate to the Home page
    await docsPage.navigateTo('docs/api/class-playwright');
    await expect(page).toHaveURL(/.*api/);
    });

test(`Verify Navigation to Community page`, async ({ page }) => {
        const docsPage = new DocsPage(page);; // Initialize the HomePage object

    // Navigate to the Home page
    await docsPage.navigateTo('community/welcome');
    await expect(page).toHaveURL(/.*community/);
    });


/*Negative Testing*/
test(`Verify navigation to invalid Docs URL`, async ({ page }) => {
    const docsPage = new DocsPage(page);
    await docsPage.navigateTo('docs/nonexistent');
    const errorText = await page.locator("h1"); // Locate the element containing "404" or "page not found" text
    await expect(errorText).toHaveText("Page Not Found"); // Verify the text is "404" or "page not found"
  });


// test(`Verify Navigation to Blog page`, async ({ page }) => {
//     const docsPage = new DocsPage(page); // Initialize the DocsPage object

//     // Navigate to the Blog page
//     await docsPage.navigateTo('blog');
//     await expect(page).toHaveURL(/.*dev/);
//     const blogHeader = await page.locator("h1");
//     await expect(blogHeader).toHaveText("Blog");  //Should fail, Expected string: "Blog" Received string: "Welcome"
// });


// test(`Verify Navigation to Support page`, async ({ page }) => {
//     const docsPage = new DocsPage(page); // Initialize the DocsPage object

//     // Navigate to the Support page
//     await docsPage.navigateTo('support');
//     await expect(page).toHaveURL(/.*support/);
//     const supportHeader = await page.locator("h1");
//     await expect(supportHeader).toHaveText("Support"); //Should fail, Expected string: "Support" Received string: "This page is not available for Node.js."
// });
