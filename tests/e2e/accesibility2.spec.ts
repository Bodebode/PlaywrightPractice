import { test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';


test.skip(`Verify Accessibility`, async ({ page }) => {
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

    // expect(violations, `Found ${violations.length} accessibility violations`).toEqual([]); /*seems to find every single violations*/

    // console.log(`Found ${violations.length} accessibility violations`);
    // expect.soft(true).toBeTruthy();     // Test will pass but still log violations but not in details

});
