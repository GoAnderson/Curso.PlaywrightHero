// import { test, expect } from '@playwright/test'

// test.beforeEach(async ({ page }) => {
//     await page.goto('https://www.saucedemo.com/v1/')
// })

// test('Primeiro teste', async ({ page }) => {
//     const logoAssert = page.locator(".login_logo")
//     await expect(logoAssert).toBeVisible();

//     const loginAssert = await page.getByRole('textbox', { name: "Email" }).fill('standard_user')
//     await expect(loginAssert).tohavevalue()

// })


import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/')
})

test('Test GetBy', async ({ page }) => {

    // Validar que esta na home
    const logoAssert = page.locator(".login_logo")
    await expect(logoAssert).toBeVisible();

    // Digitat o login e validar se foi digitado corretamente
    const loginAssert = page.getByRole('textbox', { name: "Username" })
    await loginAssert.fill('standard_user')
    await expect(loginAssert).toHaveValue('standard_user')

    // Digitat o password e validar se foi digitado corretamente
    const passwordAssert = page.getByRole('textbox', { name: "Password" })
    await passwordAssert.fill('secret_sauce')
    await expect(passwordAssert).toHaveValue('secret_sauce')

    // Clicar no botao de login
    await page.locator('#login-button').click()

    // Validar se esta na pagina correta
    await expect(page.locator('.product_label')).toBeVisible()





})