const sum = require('../sum');
// const books = require('../src/App.vue')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// test('list have id', () => {
//   expect(books).toContain('Daniel Trejo');
//   expect(new Set(books)).toContain('Daniel Trejo');
// });