const assert = require("assert");
const gen = require("../utils/gen");
const getStr = require("../utils/getStr");

const string = getStr('first', 'second')
assert.strictEqual(string, 'first')
