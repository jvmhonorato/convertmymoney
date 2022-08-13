const convert = require('./convert');

// tests dando certo pra ver se passa
test('convert 4 to 4', ()=> {
    expect(convert.convert(4,4)).toBe(16)
})


// Tests  pra testar o test quando der errado
test('convert cotacao 0 and quantidade 4', ()=> {
    expect(convert.convert(0,4)).toBe(0)
})

//Test 
test('toMoney converts float', ()=> {
    expect(convert.toMoney(2)).toBe('2.00')
})

//Test 
test('toMoney converts string', ()=> {
    expect(convert.toMoney(2)).toBe('2.00')
})