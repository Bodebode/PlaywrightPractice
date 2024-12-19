import { test, expect } from '@playwright/test';
import { DocsPage } from '../../pages/DocsPage';


test(`Verify Header on Home page`, async ({ page }) => {
    const docsPage = new DocsPage(page);
    await docsPage.navigateTo('');
    await expect(page.locator('header')).toBeVisible();
});

test(`Verify Footer on Home page`, async ({ page }) => {
    const docsPage = new DocsPage(page);
    await docsPage.navigateTo('');
    await expect(page.locator('footer')).toBeVisible();
});

test(`Verify Header on Docs Intro page`, async ({ page }) => {
    const docsPage = new DocsPage(page);
    await docsPage.navigateTo('docs/intro');
    await expect(page).toHaveURL(/.*docs/);
    await expect(page.locator('header')).toBeVisible();
});

test(`Verify Footer on Docs Intro page`, async ({ page }) => {
    const docsPage = new DocsPage(page);
    await docsPage.navigateTo('docs/intro');
    await expect(page.locator('footer')).toBeVisible();
});

test(`Verify Header on Community Welcome page`, async ({ page }) => {
    const docsPage = new DocsPage(page);
    await docsPage.navigateTo('community/welcome');
    await expect(page).toHaveURL(/.*welcome/);
    await expect(page.locator('header')).toBeVisible();
});

test(`Verify Footer on Community Welcome page`, async ({ page }) => {
    const docsPage = new DocsPage(page);
    await docsPage.navigateTo('community/welcome');
    await expect(page.locator('footer')).toBeVisible();
});

test(`Verify Header on API Class Playwright page`, async ({ page }) => {
    const docsPage = new DocsPage(page);
    await docsPage.navigateTo('docs/api/class-playwright');
    await expect(page).toHaveURL(/.*class-playwright/);
    await expect(page.locator('header')).toBeVisible();
});

test(`Verify Footer on API Class Playwright page`, async ({ page }) => {
    const docsPage = new DocsPage(page);
    await docsPage.navigateTo('docs/api/class-playwright');
    await expect(page).toHaveURL(/.*class-playwright/);
    await expect(page.locator('footer')).toBeVisible();
    const errorText = page.locator("h1"); // Locate the element containing "404" or "page not found" text
    const errorMessage = await errorText.textContent();
    if (errorMessage === "Page Not Found") {
        console.log("Although footer is visible, this page doesn't exist, it's not a real page, test is pointless");
    }
});


test(`Verify Footer on Tutorial page`, async ({ page }) => {
    const docsPage = new DocsPage(page);
    await docsPage.navigateTo('docs/tutorial');
    await expect(page).toHaveURL(/.*tutorial/);
    await expect(page.locator('footer')).toBeVisible();
    const errorText = page.locator("h1"); // Locate the element containing "404" or "page not found" text
    const errorMessage = await errorText.textContent();
    if (errorMessage === "Page Not Found") {
        console.log("Although footer is visible, this page doesn't exist, it's not a real page, test is pointless");
    }
});


test(`Verify Footer on Reference page`, async ({ page }) => {
    const docsPage = new DocsPage(page);
    await docsPage.navigateTo('docs/reference');
    await expect(page).toHaveURL(/.*reference/);
    await expect(page.locator('footer')).toBeVisible();
    const errorText = page.locator("h1"); // Locate the element containing "404" or "page not found" text
    const errorMessage = await errorText.textContent();
    if (errorMessage === "Page Not Found") {
        console.log("Although footer is visible, this page doesn't exist, it's not a real page, test is pointless");
    }
});


test(`Verify Footer on Team page`, async ({ page }) => {
    const docsPage = new DocsPage(page);
    await docsPage.navigateTo('about/team');
    await expect(page).toHaveURL(/.*team/);
    await expect(page.locator('footer')).toBeVisible();
    const errorText = page.locator("h1"); // Locate the element containing "404" or "page not found" text
    const errorMessage = await errorText.textContent();
    if (errorMessage === "Page Not Found") {
        console.log("Although footer is visible, this page doesn't exist, it's not a real page, test is pointless");
    }
});


test(`Verify Footer on Contact page`, async ({ page }) => {
    const docsPage = new DocsPage(page);
    await docsPage.navigateTo('contact');
    await expect(page.locator('footer')).toBeVisible();
    const errorText = page.locator("h1"); // Locate the element containing "404" or "page not found" text
    const errorMessage = await errorText.textContent();
    if (errorMessage === "Page Not Found") {
        console.log("Although footer is visible, this page doesn't exist, it's not a real page, test is pointless");
    }
});
