import { expect } from "@playwright/test";
import { addressDataToForm } from "../data/addressData.js";
export class Address {
  constructor(page) {
    this.page = page;
    this.addressInput = page.getByLabel("Address *");
    this.cityInput = page.getByLabel("City *");
    this.state = page.getByLabel("State *");
    this.zipPostalCodeInput = page.getByLabel("Zip/Postal Code *");
    this.homePhoneInput = page.getByLabel("Home phone **");
    this.mobilePhoneInput = page.getByLabel("Mobile phone **");
    this.saveButton = page.getByRole("button", { name: "Save " });
    this.proceedToCheckout = page.getByRole("button", {
      name: "Proceed to checkout ",
    });
    this.deliveryField = page.getByRole("cell", {
      name: "My carrier Delivery time:",
    });
  }
  fillAddressForm = async () => {
    await this.addressInput.waitFor();
    await this.addressInput.fill(addressDataToForm.address);
    await this.cityInput.waitFor();
    await this.cityInput.fill(addressDataToForm.city);
    await this.state.waitFor();
    await this.state.selectOption(addressDataToForm.state);
    await this.zipPostalCodeInput.waitFor();
    await this.zipPostalCodeInput.fill(addressDataToForm.zipCode);
    await this.homePhoneInput.waitFor();
    await this.homePhoneInput.fill(addressDataToForm.homePhone);
    await this.mobilePhoneInput.waitFor();
    await this.mobilePhoneInput.fill(addressDataToForm.mobilePhone);
    await this.saveButton.waitFor();
    await this.saveButton.click();

    await this.proceedToCheckout.click();
    expect(this.deliveryField).toBeVisible;
  };
}
