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
      if (generator.random(0, 100) < generator.getOptions().typoRate * 10) {
        output = deburr(output)
      }
      if (generator.random(0, 100) < generator.getOptions().typoRate * 10) {
        output = upperCase(output)
      }
      if (generator.random(0, 100) < generator.getOptions().typoRate * 10) {
        output = multiple(output, generator)
      }

      return output
    })
    .join('')
}

export default letterPasses
