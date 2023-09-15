// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { generate } from '../src'

describe('testing index file', () => {
  test('basic generation', () => {
    const output = generate('basic')
    expect(output).toBe('basic')
  })
})
