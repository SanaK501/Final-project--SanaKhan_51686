// pages/LandingPage.ts
import { Page } from '@playwright/test';

export class LandingPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(
      'https://ecommerce-playground.lambdatest.io/index.php?route=product/product&path=57&product_id=49',
      { waitUntil: 'domcontentloaded', timeout: 60000 }
    );
  }

  async openReviewTab() {
    await this.page.getByRole('link', { name: 'Reviews (0)' }).click();
    await this.page.waitForSelector('#form-review', { timeout: 30000 });
  }
}
