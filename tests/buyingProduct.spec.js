import { test } from "@playwright/test";
import { v4 as uuidv4 } from "uuid";

import { ProductsPage } from "../page-objects/ProductsPage.js";
import { Checkout } from "../page-objects/Checkout.js";

test.only("Buying products", async ({ page }) => {
  const productsPage = new ProductsPage(page);
  await productsPage.visit();

  await productsPage.addingToTheCart();

  const checkout = new Checkout(page);

  await checkout.navigateToCheckout();
});
