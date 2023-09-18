import { random, deburr as d } from 'lodash'
import { Options } from '../../index'

const deburr = (letter: string, options: Options): string => {
  if (random() < options.typoRate) return d(letter)

  return letter
}
export default deburr
