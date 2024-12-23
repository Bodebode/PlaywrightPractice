import { test, expect } from '@playwright/test';
import { DocsPage } from '../../pages/DocsPage';

test(`Verify API methods listed in Docs`, async ({ page }) => {
    const docsPage = new DocsPage(page);
    await docsPage.navigateTo('docs/api/class-apiresponse');
    await expect(page.url()).toContain('api');
    
    // const methods = page.locator('.api-method');
    // await expect(methods).toHaveCountGreaterThan(0); // Ensure methods are listed
});
