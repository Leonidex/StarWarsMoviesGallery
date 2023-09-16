const RomanNumeralsEnum = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
} as const;

type RomanKey = keyof typeof RomanNumeralsEnum;

function numberToRomanNumeral(num: number): string {
  let str = "";

  for (const key of Object.keys(RomanNumeralsEnum) as RomanKey[]) {
    while (num >= RomanNumeralsEnum[key]) {
      str += key;
      num -= RomanNumeralsEnum[key];
    }
  }

  return str;
}

export { numberToRomanNumeral };
