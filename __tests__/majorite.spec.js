const { estMajeur } = require('../majorite')

describe("Majorité", () => {
    test("Devrait dire lorsqu'un age est majeur", () => {
      expect(estMajeur(35)).toBe(true)
    });
    test("Devrait dire lorsqu'un age est mineur", () => {
      expect(estMajeur(12)).toBe(false)
    });    
});