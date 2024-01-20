const fs = require("fs");
const path = require("path");
import { RegisterPage } from "../page-objects/RegisterPage.js";
import { signUpData } from "../data/signUpData.js";
const { test } = require("@playwright/test");

test("Registration in online shop", async ({ page }) => {
  await page.goto("/index.php");
  const registerPage = new RegisterPage(page);
  await registerPage.signUpAsNewUser();

  const dataToSave = `export const signUpData = {
    email: "${signUpData.email}",
    password: "${signUpData.password}"
  };`;

  const signUpDataFilePath = path.resolve(
    __dirname,
    "..",
    "data",
    "signUpData.js"
  );

  fs.writeFileSync(signUpDataFilePath, dataToSave);
});
