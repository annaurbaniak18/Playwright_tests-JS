import { expect } from "@playwright/test";
export class Shipping {
  constructor(page) {
    this.page = page;
    this.termCheck = page.getByLabel("I agree to the terms of");
    this.proceedToCheckout = page.getByRole("button", {
      name: "Proceed to checkout ",
    });
    this.deliveryPrice = page.getByRole("cell", { name: "$" }).locator("div");
    this.paymentHeader = page.getByRole("heading", {
      name: "Please choose your payment",
    });
  }
  agreeTermsOfService = async () => {
    await this.termCheck.click();

    const totalDeliveryPrice = await this.deliveryPrice.innerText();
    const parsedDeliveryPrice = parseFloat(
      totalDeliveryPrice.replace(/[^\d.-]/g, "")
    );
    expect(parsedDeliveryPrice).toBeGreaterThan(0);
    await this.proceedToCheckout.click();
    const paymentPageTitle = await this.paymentHeader.innerText();
    expect(paymentPageTitle).toContain("PLEASE CHOOSE YOUR PAYMENT METHOD");
  };
}
