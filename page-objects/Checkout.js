import { expect } from "@playwright/test";
export class Checkout {
  constructor(page) {
    this.page = page;
    this.totalPrice = page.locator("#total_price");
    this.inStockButton = page.locator(".cart_avail .label-success");
    this.proceedToCheckoutButton = page.getByRole("link", {
      name: "Proceed to checkout ",
    });
  }
  navigateToCheckout = async () => {
    const totalPriceValue = await this.totalPrice.innerText();
    const parsedTotalPrice = parseFloat(
      totalPriceValue.replace(/[^\d.-]/g, "")
    );
    expect(parsedTotalPrice).toBeGreaterThan(0);
    expect(this.inStockButton).toBeVisible;

    await this.proceedToCheckoutButton.waitFor();
    await this.proceedToCheckoutButton.click();

    await this.page.pause();
  };
}
