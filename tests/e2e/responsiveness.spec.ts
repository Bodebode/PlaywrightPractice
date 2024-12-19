import { test, expect } from '@playwright/test';
import { DocsPage } from '../../pages/DocsPage';



test(`Verify responsiveness`, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 }); // Mobile size
    await page.goto('https://playwright.dev/');
    // Validate specific elements adapt to mobile layout
    await expect(page.locator('nav')).toBeVisible();
    // Test Desktop
    await page.setViewportSize({ width: 1920, height: 1080 }); // Desktop size
    await expect(page.locator('nav')).toBeVisible();
  });

test(`Verify tablet responsiveness`, async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 }); // Tablet size
    await page.goto('https://playwright.dev/');
    // Validate specific elements adapt to tablet layout
    await expect(page.locator('nav')).toBeVisible();
});

test(`Verify large screen responsiveness`, async ({ page }) => {
    await page.setViewportSize({ width: 2560, height: 1440 }); // Large screen size
    await page.goto('https://playwright.dev/');
    // Validate specific elements adapt to large screen layout
    await expect(page.locator('nav')).toBeVisible();
});

test(`Verify responsiveness across multiple devices`, async ({ page }) => {
    const viewports = [
        { width: 320, height: 480 },   // Small mobile
        { width: 375, height: 667 },   // Medium mobile
        { width: 414, height: 896 },   // Large mobile
        { width: 768, height: 1024 },  // Tablet
        { width: 1024, height: 1366 }, // Small laptop
        { width: 1440, height: 900 },  // Medium laptop
        { width: 1920, height: 1080 }, // Desktop
        { width: 2560, height: 1440 }, // Large screen
    ];

    for (const viewport of viewports) {
        await page.setViewportSize(viewport);
        await page.goto('https://playwright.dev/');
        // Validate specific elements adapt to each layout
        await expect(page.locator('nav')).toBeVisible();
    }
});
