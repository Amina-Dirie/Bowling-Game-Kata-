const BowlingGame = require("./Bowling")

describe('Scoring Bowling', () => {
  test('returns zero if no balls were knocked down', () => {
    const rolls = [
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
    ];
    expect(BowlingGame(rolls)).toEqual(0);
  });

  test('returns the total number of pins knocked down in two tries', () => {
    const rolls = [
      4, 2,
      3, 2,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      1, 0,
    ];
    expect(BowlingGame(rolls)).toEqual(12);
  });

  test('when player gets a spare, they get a bonus from the next throw', () => {
    const rolls = [
      5, 5, // spare
      2, 3,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
    ];
    expect(BowlingGame(rolls)).toEqual(17);
  });

  test('strike in first try counts bonus plus the simple total and pins knocked down in the next two rolls', () => {
    const rolls = [
      10,
      3, 5,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
    ];
    expect(BowlingGame(rolls)).toEqual(26);
  });

  test('strike in final frame counts bonus throws', () => {
    const rolls = [
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      7, 3, 8
    ];
    expect(BowlingGame(rolls)).toEqual(18);
  });
});