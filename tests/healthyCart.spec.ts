import { test, expect } from '@playwright/test';
//Without Authentication & changing of address
test('add to cart test', async ({ page }) => {
await page.goto('https://www.woolworths.co.za/'); 
await page.getByText('Delivery Address').click();
await page.getByRole('textbox', { name: 'Enter your street address eg.' }).click();
await page.getByRole('textbox', { name: 'Enter your street address eg.' }).fill('96 ');
await page.getByRole('textbox', { name: 'Enter your street address eg.' }).press('CapsLock');
await page.getByRole('textbox', { name: 'Enter your street address eg.' }).fill('96 Chester Rd ');
await page.getByRole('textbox', { name: 'Enter your street address eg.' }).press('CapsLock');
await page.getByRole('textbox', { name: 'Enter your street address eg.' }).fill('96 Chester Rd');
await page.getByRole('option', { name: '96 Chester Rd, Walmer' }).click();
await page.getByText('Confirm address').click();
await page.locator('div').filter({ hasText: /^Click & Collect$/ }).first().click();
await page.getByText('Confirm Collection').click();
await page.getByRole('search', { name: 'Search bar input area' }).click();
await page.getByRole('search', { name: 'Search bar input area' }).press('CapsLock');
await page.getByRole('search', { name: 'Search bar input area' }).fill('Mango');
await page.getByRole('search', { name: 'Search bar input area' }).press('Enter');
await page.getByRole('link', { name: 'Woolies Brands Mango Snackpot' }).click();
await page.locator('div').filter({ hasText: /^1$/ }).nth(2).click();
await page.locator('[id="\\36 009189559150"]').getByText('2', { exact: true }).click();
await page.getByText('Add to Cart').click();
await page.getByRole('search', { name: 'Search bar input area' }).click();
await page.getByRole('search', { name: 'Search bar input area' }).press('CapsLock');
await page.getByRole('search', { name: 'Search bar input area' }).fill('Grapes');
await page.getByRole('search', { name: 'Search bar input area' }).press('Enter');
await page.getByRole('link', { name: 'Seedless Black Grapes 500 g' }).first().click();
await page.getByText('VIEW', { exact: true }).click();
await page.locator('div').filter({ hasText: /^Gardens Centre, Cnr Buitenkant St & Mill St, Gardens, 8001Store Details$/ }).locator('span').click();
await page.locator('.fis-rotating-indicator-main > div:nth-child(3)').click();
await page.getByText('Add to Cart').click();
await page.getByRole('link', { name: 'Checkout mini cart' }).click();
await page.getByRole('button', { name: 'dismiss cookie message' }).click();
await page.getByRole('banner').getByRole('link').filter({ hasText: /^$/ }).click();
await page.getByRole('search', { name: 'Search bar input area' }).click();
await page.getByRole('search', { name: 'Search bar input area' }).press('CapsLock');
await page.getByRole('search', { name: 'Search bar input area' }).fill('Onions');
await page.getByRole('search', { name: 'Search bar input area' }).press('Enter');
await page.getByRole('link', { name: 'Woolies Brands Red Onions 1 kg' }).click();
await page.getByText('Add to Cart').click();
await page.getByRole('search', { name: 'Search bar input area' }).click();
await page.getByRole('search', { name: 'Search bar input area' }).press('CapsLock');
await page.getByRole('search', { name: 'Search bar input area' }).fill('Potatoes');
await page.getByRole('search', { name: 'Search bar input area' }).press('Enter');
await page.getByRole('link', { name: 'Woolies Brands Baby Potatoes with Garlic & Herb Butter 350 g' }).click();
await page.locator('div').filter({ hasText: /^1$/ }).nth(2).click();
await page.locator('[id="\\32 0046002"]').getByText('2').click();
await page.getByText('Add to Cart').click();
await page.getByRole('search', { name: 'Search bar input area' }).click();
await page.getByRole('search', { name: 'Search bar input area' }).fill('cook book');
await page.locator('#prod_details_undefined').getByRole('link', { name: 'My First Vegetarian Cook Book' }).click();
await page.getByText('Add to Cart').click();
});