const ArrayToBeTested = require("../src/index")

const arrayToBeTested = new ArrayToBeTested(["Joao", "lepe", "valgas"]);

test(`tests if the first array's item's João`, () => {
    expect(arrayToBeTested.GetIsSomeItemInArray("Joao")).toBe(true);
})

test(`Verify if every array's item's a string`, () => {
    expect(arrayToBeTested.VerifyIsArrayIsMadeByString()).toBe(true)
})