export default function sayHello(arg1, arg2) {
  let result = arg1 + arg2;
  result *= 2;
  return result;
}

// eslint-disable-next-line no-console
console.log(`site is working. result: ${sayHello(10, 10)}`);
