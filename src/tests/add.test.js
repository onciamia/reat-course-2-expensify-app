const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Helo ${name}!`;


test('should add two numbers', () => {
    const result = add(3, 4);

    expect(result).toBe(7);

});


test('this is ok', () => {
    const corect = generateGreeting('Mia');
    expect(corect).toBe('Helo Mia!');
});

test('should generate greeting for no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Helo Anonymous!');
});