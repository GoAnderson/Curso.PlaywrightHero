import { test, expect } from '@playwright/test'
import { using } from 'rxjs'

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})

test('Input Fields', async ({ page }) => {
    const usingTheGridEmailInput = page.locator('nb-card', { hasText: "Using the Grid" }).getByRole('textbox', { name: "Email" })

    await usingTheGridEmailInput.fill('test@test.com')
    // await usingTheGridEmailInput.clear()

    const inputValue = await usingTheGridEmailInput.inputValue()
    expect(inputValue).toEqual('test@test.com')

    await expect(usingTheGridEmailInput).toHaveValue('test@test.com')


})