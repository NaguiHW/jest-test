const text = 'Hello world';
const arr = ['apple', 'banana', 'melon'];
const reverseString = (str, callback) => {
  callback(str.split('').reverse().join(''));
};

const reverseWithPromise = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error('Error'));
    }
    resolve(str.split('').reverse().join(''));
  });
}

it('The text has to include "world"', () => {
  expect(text).toMatch(/world/);
});

it('The aray has to include "banana"', () => {
  expect(arr).toContain('banana');
});

it('Greater than...', () => {
  expect(10).toBeGreaterThan(9);
});

it('Should be true', () => {
  expect(true).toBeTruthy();
});

it('Testing a callback', () => {
  reverseString('Hello', (str) => {
    expect(str).toBe('olleH');
  })
});

it('Testing a promise', () => {
  return reverseWithPromise('Hello')
    .then(string => {
      expect(string).toBe('olleH');
    })
});

it('Testing a async / await', async () => {
  const text = await reverseWithPromise('Hello');
  expect(text).toBe('olleH');
});
