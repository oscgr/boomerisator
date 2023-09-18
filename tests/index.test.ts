// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { generate } from '../src'

describe('testing index file', () => {
  test('basic generation', () => {
    const expected = generate(
      'Florence est très excitée à l’idée de se brancher sur un réseau militaire, mais en même temps, elle sait que cela va lui apporter des ennuis. Au moins, elle saura. Elle saura si David l’aime. Et en préparant le matériel demandé par Prélude, tout en pensant à David, elle se rappelle comment elle en est arrivée là.'
    )
    expect(typeof expected).toBe('string')
  })
})
