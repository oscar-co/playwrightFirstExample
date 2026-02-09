import { test, expect, type Page } from '@playwright/test';

async function goToShoppingList(page: Page) {
	await page.goto('/');
}

async function addProducts(page: Page, products: string[]) {
	const input = page.getByRole('combobox', { name: 'Añadir nuevo producto' });

	for (const p of products) {
		await input.fill(p);
		await input.press('Enter');
	}
}

async function approveCurrentItem(page: Page, name: string) {
	const item = page.locator('#currentList li', { hasText: name });
	await item.locator('.addingButton').click();
}

async function removeCurrentItem(page: Page, name: string) {
	const item = page.locator('#currentList li', { hasText: name });
	await item.locator('.removingButton').click();
}

test.describe('shopping list', () => {
	test.beforeEach(async ({ page }) => {
		await goToShoppingList(page);
	});

	test('adding new items hides pan in current list', async ({ page }) => {
		await addProducts(page, ['pan', 'cebollas', 'pollo']);

		await approveCurrentItem(page, 'pan');
		await approveCurrentItem(page, 'cebollas');
		await removeCurrentItem(page, 'pollo');

		const item_pan = page.locator('#currentList li', { hasText: 'pan' });
		await expect(item_pan).toBeHidden();
	});

	test('pan appears in frequent list', async ({ page }) => {
		await addProducts(page, ['pan']);
		await approveCurrentItem(page, 'pan');

		const flPan = page.locator('#frequentList li.draggable', { hasText: 'pan' });
		await expect(flPan).toBeVisible();
	});
});
