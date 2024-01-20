import { test } from "@playwright/test";
import { v4 as uuidv4 } from "uuid";
import { signInData } from "../data/signUpData.js";
import { ProductsPage } from "../page-objects/ProductsPage.js";
import { Checkout } from "../page-objects/Checkout.js";
import { RegisterPage } from "../page-objects/RegisterPage.js";

// import { loginDetails } from "../data/signInData.js";

test.only("Buying products", async ({ page }) => {
  const productsPage = new ProductsPage(page);
  await productsPage.visit();
  const registerPage = new RegisterPage(page);
  await registerPage.signUpAsNewUser();

  await productsPage.addingToTheCart();

  const checkout = new Checkout(page);

  await checkout.navigateToCheckout();

  //   const loginDetails = (signInData.email, signInData.password);
  //   const loginDetails = loginDetails;
});
