const { test, expect } = require('@playwright/test');

test('verifica el título de Playwright', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
