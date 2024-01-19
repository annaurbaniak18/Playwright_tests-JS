import { RegisterPage } from "../page-objects/RegisterPage.js";
import { v4 as uuidv4 } from "uuid";
const { test, expect } = require("@playwright/test");

test("Registration to the shop", async ({ page }) => {
  await page.goto("/index.php?controller=authentication&back=my-account");

  const registerPage = new RegisterPage(page);
  const firstname = "anna";
  const lastname = "testowa";
  const email = uuidv4() + "@gmail.com";
  function generateRandomPassword(length) {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }

    return password;
  }

  const randomPassword = generateRandomPassword(10);
  const password = randomPassword;
  await registerPage.signUpAsNewUser(email, firstname, lastname, password);
  const registerSuccessfully = page.getByText("Your account has been created.");
  await expect(registerSuccessfully).toBeVisible();
  const accountName = page.locator(".header_user_info .account");
  await expect(accountName).toContainText("Anna");
  await page.pause();
});
