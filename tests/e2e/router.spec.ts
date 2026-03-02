import { test, expect } from '@playwright/test'

test.describe('Router', () => {
  test('visit homepage', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('.claim')).toBeVisible()
  })

  test('visit interessierte', async ({ page }) => {
    await page.goto('/interessierte')
    await expect(page.locator('h1')).toContainText('Möchten Sie uns kennenlernen?')
  })

  test('visit schnuppern', async ({ page }) => {
    await page.goto('/interessierte/schnuppern')
    await expect(page.locator('h1')).toContainText('Schnuppern')
  })

  test('visit aktivitaeten', async ({ page }) => {
    await page.goto('/interessierte/aktivitaeten')
    await expect(page.locator('h1')).toContainText('Aktivitäten')
  })

  test('visit cevi schweiz', async ({ page }) => {
    await page.goto('/interessierte/cevi_schweiz')
    await expect(page.locator('h1')).toContainText('Cevi Schweiz')
  })

  test('visit standort', async ({ page }) => {
    await page.goto('/interessierte/standort')
    await expect(page.locator('h1')).toContainText('Standort')
  })

  test('visit medien', async ({ page }) => {
    await page.goto('/interessierte/medien')
    await expect(page.locator('h1')).toContainText('Medien')
  })

  test('visit spenden', async ({ page }) => {
    await page.goto('/interessierte/spenden')
    await expect(page.locator('h1')).toContainText('Spenden')
  })

  test('visit cevianer', async ({ page }) => {
    await page.goto('/cevianer')
    await expect(page.locator('h1')).toContainText('Cevianer/in')
  })

  test('visit agenda', async ({ page }) => {
    await page.goto('/cevianer/agenda')
    await expect(page.locator('h1')).toContainText('Agenda')
  })

  test('visit album', async ({ page }) => {
    await page.goto('/cevianer/album')
    await expect(page.locator('h1')).toContainText('Album')
  })

  test('visit laedeli', async ({ page }) => {
    await page.goto('/cevianer/laedeli')
    await expect(page.locator('h1')).toContainText('Lädeli')
  })

  test('visit ausbildung', async ({ page }) => {
    await page.goto('/cevianer/ausbildung')
    await expect(page.locator('h1')).toContainText('Ausbildung')
  })

  test('visit leiterteam', async ({ page }) => {
    await page.goto('/cevianer/leiterteam')
    await expect(page.locator('h1')).toContainText('Leiterteam')
  })

  test('visit kontakt', async ({ page }) => {
    await page.goto('/kontakt')
    await expect(page.locator('h1')).toContainText('Kontakt')
  })

  test('visit a non existing page', async ({ page }) => {
    await page.goto('/non_existing')
    await expect(page.locator('h1')).toContainText('Ups, da ist was schief gegangen')
  })
})
