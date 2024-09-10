import { test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})

test('Test Inicial', async ({ page }) => {
    //By Tag name
    await page.locator('input').first().click()

    //By ID
    page.locator('#inputEmail1')

    //By class value
    page.locator('.input-full-width')

    //By attribute
    page.locator('[placeholder="Email"]')

    //By class value(full)
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

    //Combine different selectors
    page.locator('input[placeholder="Email"]')

    //By parcial text
    page.locator(':text("Using")')

    // By Exact text match
    page.locator(':text-is("Using the Grid")')
})