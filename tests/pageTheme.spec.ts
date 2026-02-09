import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
});

test('theme toggles between light and dark', async ({ page }) => {

	const body = page.locator('html');

	await expect(body).toHaveAttribute('data-theme', 'light');

	await page.getByRole('button', { name: 'Cambiar tema' }).click();
	await expect(body).toHaveAttribute('data-theme', 'dark');

	await page.getByRole('button', { name: 'Cambiar tema' }).click();
	await expect(body).toHaveAttribute('data-theme', 'light');
});
