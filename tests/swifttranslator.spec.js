const { test, expect } = require('@playwright/test');

test('Convert Singlish text to Sinhala successfully', async ({ page }) => {
  // Navigate to translator site
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  // Input text box
  const inputBox = page.getByRole('textbox').first();
  await inputBox.click();
  await inputBox.fill('oyaata kohomada?');

  // Output translation box
  const outputBox = page.locator(
    '.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  );

  // Wait until translation appears
  await expect(outputBox).not.toBeEmpty({ timeout: 30000 });

  const output = (await outputBox.innerText()).trim();
  console.log('Translated Output:', output);

  // Assertion with meaningful expectation
  expect(output).toContain(
    'ඔයා',
    'Expected Sinhala translation to contain "ඔයා"'
  );
});
