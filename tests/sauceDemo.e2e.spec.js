// End-to-end test for the given scenario (Functional Test)
// Login → Add One Product → Verify Product in Cart → Logout

const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://www.saucedemo.com/';
const USERNAME = 'standard_user';
const PASSWORD = 'secret_sauce';

test('Login → Add One Product → Verify Product in Cart → Logout', async ({ page }) => {

  // login with valid credentials
  await page.goto(BASE_URL);
  await page.fill('#user-name', USERNAME);
  await page.fill('#password', PASSWORD);
  await page.click('#login-button');

  // Verify successful login
  await expect(page).toHaveURL(/inventory.html/);

  // See all products
  const products = page.locator('.inventory_item');
  const totalProducts = await products.count();

  // Choose any one product dynamically (random product)
  const productIndex = Math.floor(Math.random() * totalProducts);
  const selectedProduct = products.nth(productIndex);

  // Extract selected product name
  const selectedProductName = await selectedProduct.locator('.inventory_item_name').innerText();

  // Add product to cart
  await selectedProduct.locator('button').click();

  // Verify cart badge shows 1
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  //  Navigate to cart
  await page.click('.shopping_cart_link');
  await expect(page).toHaveURL(/cart.html/);

  // Get product name inside cart
  const cartProductName = await page.locator('.inventory_item_name').innerText();

  // Verify same product is listed in cart
  await expect(cartProductName).toBe(selectedProductName);

  //  Logout
  await page.click('.bm-burger-button');
  await page.click('#logout_sidebar_link');

  // Verify redirected back to login
  await expect(page).toHaveURL(BASE_URL);
  await expect(page.locator('#login-button')).toBeVisible();
});
