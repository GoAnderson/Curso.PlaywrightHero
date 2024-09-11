import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})

test('Assertions', async ({ page }) => {

    const basicFormButton = page.locator('nb-card').filter({ hasText: "Basic form" }).locator('button')


    //General assertions
    const value = 5
    expect(value).toEqual(5)

    const text = await basicFormButton.textContent()
    expect(text).toEqual("Submit")

    //Location assertion
    await expect(basicFormButton).toHaveText('Submit')

    //Soft Assertion - Continua o test mesmo se falhar
    await expect.soft(basicFormButton).toHaveText('Submit')
    await basicFormButton.click()




})