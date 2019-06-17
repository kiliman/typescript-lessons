import { greet, fill } from './functions'

test('greet hello kiliman', () => {
  expect(greet('hello', 'kiliman')).toBe('hello, kiliman!')
})

test('fill array with letter a', () => {
  expect(fill([1, 2, 3], 'a')).toEqual(['a', 'a', 'a'])
})
