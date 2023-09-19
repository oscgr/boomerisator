import deburr from './deburr'
import upperCase from '../word/uppercase'
import multiple from './multiple'
import { Boomerisator } from '../../index'

const letterPasses = (input: string, generator: Boomerisator) => {
  // output = words(output)
  return input
    .split('')
    .map((letter) => {
      let output = letter
      if (generator.random(0, 10) < 3) {
        output = deburr(output)
      }
      if (generator.random(0, 10) < 1) {
        output = upperCase(output)
      }
      if (generator.random(0, 50) < 1) {
        output = multiple(output, generator)
      }

      return output
    })
    .join('')
}

export default letterPasses
