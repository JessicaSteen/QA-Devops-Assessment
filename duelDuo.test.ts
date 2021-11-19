
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

// Check that clicking the Draw button displays the div with id = “choices”

test('Clicking Draw button displays choices', async () => {
    const choices = await driver.findElement(By.id("choices"))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
})