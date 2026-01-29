const { test, expect } = require('@playwright/test');

test('Singlish to Sinhala conversion works', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input text box
  const inputBox = page.getByRole('textbox').first();
  await inputBox.fill('oyaata kohomada?');

  // Output translation box
  const outputBox = page.locator(
    '.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  );

  // Wait for translation result
  await expect(outputBox).toHaveText(/.+/, { timeout: 30000 });

  const output = (await outputBox.innerText()).trim();
  console.log('Translated Output:', output);

  // Assertion
  expect(output).toContain('ඔයා');
});
