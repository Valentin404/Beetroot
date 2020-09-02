const sum = (a, b) => a - b;
const substract = (a, b) => a - b;

function expect(val) {
    return {
        toBe: function(expected) {
            if (val !== expected) {
                throw new Error(`${val} is not equal ${expected}`)
            }
        }
    }
}

function test(title, fn) {
    try {
        fn();
        console.log('outer' + title)
    } catch (error) {
        console.log('inner' + title)
        console.log(error)
    }
}

test('sum test', () => {
    const result = sum(2,3);
    const expected = 5;
    expect(result).toBe(expected)
})

test('substract test', () => {
    const result = substract(10,3);
    const expected = 7;
    expect(result).toBe(expected)
})
