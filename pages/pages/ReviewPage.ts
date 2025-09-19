// pages/ReviewPage.ts
import { expect, Page } from '@playwright/test';

export class ReviewPage {
  constructor(private page: Page) {}

  async submitReview(name: string, text: string, rating: number) {
    // Fill in name
    await this.page.fill('#input-name', name);
    // Fill in review text
    await this.page.fill('#input-review', text);

    // Select rating if >0
    if (rating > 0) {
      await this.page.check(`input[name="rating"][value="${rating}"]`);
    }

    // Submit the review form
    await this.page.click('#button-review');
  }

  async assertSuccessMessage() {
    await expect(this.page.locator('.alert-success')).toContainText('Thank you for your review');
  }

  async assertErrorMessage(expected: string) {
    await expect(this.page.locator('.alert-danger')).toContainText(expected);
  }
}
