import { getTodoDateString } from "./todoUtils"

describe('Test of the todoUtils', () => {
  it('should return the correct date string well formatted', () => {
    const date = new Date(2025, 1, 12)
    const dateString = getTodoDateString(date, "fr-FR")
    expect(dateString).toBe("mer. 12 févr. 2025")
  })
})