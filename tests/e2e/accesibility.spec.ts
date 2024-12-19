import { test, expect } from '@playwright/test';
import { DocsPage } from '../../pages/DocsPage';
import AxeBuilder from '@axe-core/playwright';

test(`Verify Accessibility`, async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const results = await new AxeBuilder({ page }).analyze();
    
    const violations = results.violations;
    for (const violation of violations) {
        console.log('\nRule Violated:', violation.id);
        console.log('Impact Level:', violation.impact);
        console.log('Description:', violation.description);
        console.log('Help URL:', violation.helpUrl);
        console.log('Affected Elements:', violation.nodes.length);
    }
    
    console.log(`\nTotal accessibility violations found: ${violations.length}`);
});




test('Verify Accessibility Standards and Readability', async ({ page }) => {
    // Navigate to the page
    await page.goto('https://playwright.dev/docs/intro');
    
    // Check if main content is present
    const mainContent = await page.locator('main');
    await expect(mainContent).toBeVisible();
    
    // Ensure headings are properly structured
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);
    
    // Check for proper alt text on images
    const images = await page.locator('img');
    for (let i = 0; i < await images.count(); i++) {
        const alt = await images.nth(i).getAttribute('alt');
        expect(alt).toBeTruthy();
    }
    
    // Run axe accessibility scan
    const results = await new AxeBuilder({ page })
        .include('main')
        .withTags(['wcag2a', 'wcag2aa'])
        .analyze();
    
    expect(results.violations).toEqual([]);
});
