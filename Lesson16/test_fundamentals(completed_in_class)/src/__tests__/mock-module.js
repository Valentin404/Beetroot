const gen = require("../utils/gen");
const getStr = require("../utils/getStr");

jest.mock('../utils/gen')

test('returns random string', () => {
    const string = getStr('first', 'second')
    expect(string).toBe('first');
    expect(gen.getEl.mock.calls).toEqual([
        ['first', 'second'],
        ['first', 'second']
    ])

    gen.getEl.mockReset();
})
