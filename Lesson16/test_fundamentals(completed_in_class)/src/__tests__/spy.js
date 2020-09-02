const gen = require("../utils/gen");
const getStr = require("../utils/getStr");

test('test random string', () => {
    jest.spyOn(gen, 'getEl');

    gen.getEl = jest.fn((a, b) => a)

    const string = getStr('first', 'second')

    expect(string).toBe('first')
    expect(gen.getEl.mock.calls).toEqual([
        ['first', 'second'],
        ['first', 'second']
    ])

    gen.getEl.mockReset();
})
