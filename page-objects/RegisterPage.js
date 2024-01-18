import { expect } from "@playwright/test";
export class RegisterPage {
  constructor(page) {
    this.page = page;
    this.signInButton = page.getByRole("link", { name: "Sign in" });
    this.emailInput = page.locator("#email_create");
    this.createAccountButton = page.getByRole("button", {
      name: " Create an account",
    });
    this.titleRadioButton = page.getByLabel("Mrs.");
    this.firstNameInput = page.getByLabel("First name *");
    this.lastNameInput = page.getByLabel("Last name *");
    this.passwordInput = page.getByLabel("Password *");
    this.registerButton = page.getByRole("button", { name: "Register " });
  }
  signUpAsNewUser = async (email, firstname, lastname, password) => {
    await this.signInButton.waitFor();
    await this.signInButton.click();
    await this.emailInput.waitFor();
    await this.emailInput.fill(email);
    await this.createAccountButton.waitFor();
    await this.createAccountButton.click();
    await this.titleRadioButton.waitFor();
    await this.titleRadioButton.click();
    await this.firstNameInput.waitFor();
    await this.firstNameInput.fill(firstname);
    await this.lastNameInput.waitFor();
    await this.lastNameInput.fill(lastname);
    await this.passwordInput.waitFor();
    await this.passwordInput.fill(password);
    await this.registerButton.waitFor();
    await this.registerButton.click();
  };
}
