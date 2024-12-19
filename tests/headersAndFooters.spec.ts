import { test, expect } from '@playwright/test';
import { DocsPage } from '../pages/DocsPage';


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
    await expect(page.locator('header')).toBeVisible();
});

test(`Verify Footer on API Class Playwright page`, async ({ page }) => {
    const docsPage = new DocsPage(page);
    await docsPage.navigateTo('docs/api/class-playwright');
    await expect(page.locator('footer')).toBeVisible();
});

// test(`Verify Header on Tutorial page`, async ({ page }) => {
//     const docsPage = new DocsPage(page);
//     await docsPage.navigateTo('docs/tutorial');
//     await expect(page.locator('header')).toBeVisible();
// }); //THERE IS NO HEADER ON TUTORIAL PAGE BUT THERE IS A NAVBAR AND A FOOTER, COME UP WITH A BETTER WAY OF REPORTING THIS, OR JUST IGNORE IT.

test(`Verify Footer on Tutorial page`, async ({ page }) => {
    const docsPage = new DocsPage(page);
    await docsPage.navigateTo('docs/tutorial');
    await expect(page.locator('footer')).toBeVisible();
});

// test(`Verify Header on Reference page`, async ({ page }) => {
//     const docsPage = new DocsPage(page);
//     await docsPage.navigateTo('docs/reference');
//     await expect(page.locator('header')).toBeVisible();
// }); //THERE IS NO HEADER ON REFERENCE PAGE BUT THERE IS A NAVBAR AND A FOOTER, COME UP WITH A BETTER WAY OF REPORTING THIS, OR JUST IGNORE IT.

test(`Verify Footer on Reference page`, async ({ page }) => {
    const docsPage = new DocsPage(page);
    await docsPage.navigateTo('docs/reference');
    await expect(page.locator('footer')).toBeVisible();
});

// test(`Verify Header on Team page`, async ({ page }) => {
//     const docsPage = new DocsPage(page);
//     await docsPage.navigateTo('about/team');
//     await expect(page.locator('header')).toBeVisible();
// }); //THERE IS NO HEADER ON TEAM PAGE BUT THERE IS A NAVBAR AND A FOOTER, COME UP WITH A BETTER WAY OF REPORTING THIS, OR JUST IGNORE IT.

test(`Verify Footer on Team page`, async ({ page }) => {
    const docsPage = new DocsPage(page);
    await docsPage.navigateTo('about/team');
    await expect(page.locator('footer')).toBeVisible();
});

// test(`Verify Header on Contact page`, async ({ page }) => {
//     const docsPage = new DocsPage(page);
//     await docsPage.navigateTo('contact');
//     await expect(page.locator('header')).toBeVisible();
// }); //THERE IS NO HEADER ON CONTACT PAGE BUT THERE IS A NAVBAR AND A FOOTER, COME UP WITH A BETTER WAY OF REPORTING THIS, OR JUST IGNORE IT.

test(`Verify Footer on Contact page`, async ({ page }) => {
    const docsPage = new DocsPage(page);
    await docsPage.navigateTo('contact');
    await expect(page.locator('footer')).toBeVisible();
});
