const gen = require("../utils/gen");
const getStr = require("../utils/getStr");

test('test random string', () => {
    const original = gen.getEl;

    gen.getEl = jest.fn((a, b) => a)

    const string = getStr('first', 'second')

    expect(string).toBe('first')
    expect(gen.getEl).toHaveBeenCalledTimes(2)
    expect(gen.getEl).toHaveBeenCalledWith('first', 'second')

    gen.getEl = original;
})
