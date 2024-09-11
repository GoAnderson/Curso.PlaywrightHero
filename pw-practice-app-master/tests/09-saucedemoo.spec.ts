import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/')

})

test('Test Saucedemo', async ({ page }) => {

    await page.locator('#login-button').click()
    await expect(page.locator('#login-button')).toBeVisible()
    await expect(page.locator('#login-button')).toHaveText('LOGIN')



    // await page.locator('.login_logo').click()

    // await expect(page.locator('.login_logo')).toBeVisible()


    // await page.getByRole('textbox', { name: "Username" }).click()

    // await page.getByRole('textbox', { name: "Username" }).fill('test@test.com')

    // await page.getByRole('textbox', { name: "Password" }).click()

    // await page.getByRole('textbox', { name: "Password" }).fill('test@test.com')

    // await page.locator('.login_credentials').locator(':text-is("Accepted usernames are:")').click()

    // await page.locator('h3[data-test="error"]').click()








})
