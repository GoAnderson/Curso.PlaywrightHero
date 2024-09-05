import { test } from '@playwright/test'

test('Locators', async ({ page }) => {
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()

    //input
    page.locator('input')

    //Id
    page.locator('#inputEmail1')

    //By class
    page.locator('.shape-rectangle')

    //Atribute
    page.locator('[placeholder="Email"]')

    //Class value full
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

    //parcial text match
    page.locator(':text("Usine"')
    page.locator(':text-is("Using the grid")')
})

