import { expect } from "@playwright/test";
export class Payment {
  constructor(page) {
    this.page = page;
    this.goToPayButton = page.getByRole("link", {
      name: "Pay by bank wire (order",
    });
    this.confirmPaymentButton = page.getByRole("button", {
      name: "I confirm my order ",
    });
    this.orderSummaryTitle = page.getByRole("heading", {
      name: "Order summary",
    });
    this.orderCompletedMessage = page.getByText("Your order on My Shop is");
    this.bankWireData = page.getByText("Please send us a bank wire");
  }
  payForBuying = async () => {
    await this.goToPayButton.click();
    await this.page.waitForURL(
      "/index.php?fc=module&module=bankwire&controller=payment"
    );
    await expect(this.orderSummaryTitle).toBeVisible();
    await this.confirmPaymentButton.click();

    await expect(this.orderCompletedMessage).toContainText(
      "Your order on My Shop is complete."
    );

    await expect(this.bankWireData).toBeVisible({ timeout: 8000 });
    // await this.page.pause();
  };
}
