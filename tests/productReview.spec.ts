// tests/productReview.spec.ts
import { test, expect } from '@playwright/test';
import { LandingPage } from '../pages/LandingPage';
import { ReviewPage } from '../pages/ReviewPage';

test.describe('Product Review', () => {
  test('User can submit a product review', async ({ page }) => {
    const landingPage = new LandingPage(page);
    const reviewPage = new ReviewPage(page);

    await landingPage.goto();
    await landingPage.openReviewTab();

    await reviewPage.submitReview(
      'Sana Khan',
      'This is an automated review from Playwright test.',
      5
    );

    const successMessage = await page.locator('.alert-success').textContent();
    await expect(successMessage).toContain('Thank you for your review');
  });
});
