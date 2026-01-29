const { test, expect } = require('@playwright/test');

test('Singlish to Sinhala conversion works', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox').first();
  await inputBox.click();
  await inputBox.fill('oyaata kohomada?');

  const outputBox = page.locator(
    '.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  );

  // ✅ Wait until output is not empty
  await expect(outputBox).toHaveText(/.+/, { timeout: 30000 });

  const output = (await outputBox.innerText()).trim();
  console.log('OUTPUT:', JSON.stringify(output)); // helps debugging

  expect(output).toContain('ඔයා');
});
