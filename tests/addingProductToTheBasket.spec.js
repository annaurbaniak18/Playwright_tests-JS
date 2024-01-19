// const offerTitle=page.getByRole('link', { name: 'Printed Dress' }).nth(3);
// expect(offerTitle).
import { test, expect } from "@playwright/test";
import { ProductsPage } from "../page-objects/ProductsPage";
test.only("Adding product to the basket", async ({ page }) => {
  const productsPage = new ProductsPage(page);
  await productsPage.visit();

  await productsPage.addingToTheCart();

  const successMessageText = await productsPage.addingToCartMessage.innerText();

  expect(successMessageText).toContain(
    "Product successfully added to your shopping cart"
  );

  const checkoutLink = page.getByRole("link", {
    name: "Proceed to checkout ",
  });
  expect(checkoutLink).toBeVisible();
  await checkoutLink.waitFor();

  await checkoutLink.click();
  await page.waitForURL("/index.php?controller=order");
});
