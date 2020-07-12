const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    const employee = new Manager('Drake', 'meuio56@gmail.com', 1)

    expect(employee.name).toStrictEqual(expect.any(String));
    expect(employee.id).toStrictEqual(expect.any(Number));
    expect(employee.email).toStrictEqual(expect.any(String));
})