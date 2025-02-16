import { test, expect } from '@playwright/test';

test('find recipes', async ({ page }) => {
await page.goto('https://www.whatsfordinner.co.za/');
await page.getByRole('button', { name: 'Accept' }).click();
await page.getByRole('menubar').getByText('Recipes', { exact: true }).click();
await page.getByRole('link', { name: 'Vegetarian Recipes' }).click(); //retry test if wait time is > 30000ms (slow test)
await page.getByRole('link', { name: 'Plant-based Recipes' }).click();
await page.getByRole('link', { name: 'Buffalo Cauliflower Tacos' }).getByLabel('inactive Favorite toggle').click();
await page.getByRole('link', { name: 'Buffalo Cauliflower Tacos' }).click();
await page.getByRole('button', { name: 'print recipe' });
});