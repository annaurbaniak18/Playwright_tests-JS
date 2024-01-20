import { signUpData } from "../data/signUpData";
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
    this.accountCreated = page.locator(".alert .alert-success");
    this.accountName = page.locator(".header_user_info .account");
  }
  signUpAsNewUser = async (email, firstname, lastname, password) => {
    await this.signInButton.waitFor();
    await this.signInButton.click();

    await this.emailInput.waitFor();
    await this.emailInput.fill(signUpData.email);
    await this.createAccountButton.waitFor();
    await this.createAccountButton.click();
    await this.titleRadioButton.waitFor();
    await this.titleRadioButton.click();

    await this.firstNameInput.waitFor();
    await this.firstNameInput.fill(signUpData.firstname);
    await this.lastNameInput.waitFor();
    await this.lastNameInput.fill(signUpData.lastname);
    await this.passwordInput.waitFor();
    await this.passwordInput.fill(signUpData.password);
    await this.registerButton.waitFor();
    await this.registerButton.click();
    // const checkAccountCreated = await this.accountCreated.innerText();
    // expect(this.accountCreated).toContainText(
    //   " Your account has been created. "
    // );
    expect(this.accountName).toContainText("Anna");
  };
}
