import { test, expect } from '@playwright/test';
import { DocsPage } from '../../pages/DocsPage';

test(`Verify Accessibility`, async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const snapshot = await page.accessibility.snapshot();
    expect(snapshot).toBeTruthy();
  });
