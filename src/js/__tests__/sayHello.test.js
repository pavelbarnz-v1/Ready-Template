import sayHello from "../script.js";

test("Тест функции sayHello", () => {

    expect(sayHello(10, 10)).toBe(40)
})