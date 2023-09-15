import { deburr, random, upperCase } from 'lodash'
import { Options } from '../../index'

const typo = (letter: string, options: Options): string => {
  // const typoRate = options.typoRate
  let output = letter

  if (random() < options.typoRate) output = upperCase(letter)
  if (random() < options.typoRate) output = deburr(letter)

  return output
}
export default typo
