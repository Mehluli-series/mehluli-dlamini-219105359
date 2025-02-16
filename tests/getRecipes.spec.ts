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

var recipeUrl = 'https://www.whatsfordinner.co.za/recipe/vegetables/234714-buffalo-cauliflower-tacos/';

test ('download your recipe', async({page})=> {
    //This test to download pdf document for the above recipe - Buffalo Cauliflower Tacos
    await page.goto(recipeUrl)
    await page.pdf({ path: './Recipes/CauliflowerRecipe.pdf', format: 'A4' });
});