const { estMajeur } = require('../src/majorite')

describe("Majorité", () => {
    test("Devrait dire lorsqu'un age est majeur", () => {
      expect(estMajeur(35)).toBe(true)
    });
    test("Devrait être majeur à 18 ans", () => {
      expect(estMajeur(18)).toBe(true)
    });    
    test("Devrait dire lorsqu'un age est mineur", () => {
      expect(estMajeur(12)).toBe(false)
    });
    test("Devrait renvoyer un boolean", () => {
      expect(estMajeur(25)).toBeBoolean()
    })
});