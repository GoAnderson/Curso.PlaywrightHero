import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('http://uitestingplayground.com/ajax')
    await page.getByText('Button Triggering AJAX Request').click()

})

test('Assertions', async ({ page }) => {
    // const successButton = page.locator('.bg-success')
    // const text = await successButton.textContent()
    // expect(text).toEqual('Data loaded with AJAX get request.')

    // const successButton = page.locator('.bg-success')
    // await successButton.waitFor({ state: 'attached' })
    // const text = await successButton.allTextContents()
    // expect(text).toContain('Data loaded with AJAX get request.')

    // const successButton = page.locator('.bg-success')
    // await expect(successButton).toHaveText('Data loaded with AJAX get request.', { timeout: 20000 })

    const successButton = page.locator('.bg-success')

    // Wait for element
    await page.waitForSelector('.bg-success')

    const text = await successButton.allTextContents()
    expect(text).toContain('Data loaded with AJAX get request.')


})