import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://www.emag.hu/');
  await page.getByRole('button', { name: 'Az összes elutasítása' }).click();
  await page.getByPlaceholder('Találj rá a keresés örömére').click();
  await page.getByRole('link', { name: ' parfum' }).click();
  await page.getByRole('button', { name: 'Keresés ' }).click();
  await page.getByRole('link', { name: 'Lattafa Yara Női parfüm, Eau de Parfum, 100 ml Szuper Ár' }).click();
  await page.locator('[data-test="main-add-to-cart-button"]').click();
  await page.getByRole('link', { name: 'Megnézem a Kosár tartalmát' }).click();
  await page.getByRole('button', { name: '' }).click();
  await expect(page.locator('#my_cart')).toContainText('2');
  await expect(page.locator('#cart-products')).toContainText('2');
  await expect(page.getByRole('button', { name: 'Töröl' })).toBeVisible();
  await page.getByRole('button', { name: 'Töröl' }).click();
  //await expect(page.getByRole('paragraph')).toContainText('A kosarad üres. Termékek hozzáadásához, kérjük lépj vissza a webáruházba.');
  await expect(page.locator('#cart-products')).toMatchAriaSnapshot(`
    - button ""
    - paragraph:
      - text: A kosarad üres. Termékek hozzáadásához, kérjük lépj
      - link "vissza a webáruházba."
    `);
})