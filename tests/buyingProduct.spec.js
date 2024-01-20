import { test } from "@playwright/test";
import { ProductsPage } from "../page-objects/ProductsPage.js";
import { Checkout } from "../page-objects/Checkout.js";
import { RegisterPage } from "../page-objects/RegisterPage.js";
import { Address } from "../page-objects/Address.js";
import { Shipping } from "../page-objects/Shipping.js";
import { Payment } from "../page-objects/Payment.js";

test.only("Buying product process", async ({ page }) => {
  const productsPage = new ProductsPage(page);
  await productsPage.visit();
  const registerPage = new RegisterPage(page);
  await registerPage.signUpAsNewUser();

  await productsPage.addingToTheCart();

  const checkout = new Checkout(page);

  await checkout.navigateToCheckout();

  const addressForm = new Address(page);
  await addressForm.fillAddressForm();

  const shipping = new Shipping(page);
  await shipping.agreeTermsOfService();

  const payment = new Payment(page);
  await payment.payForBuying();
});
