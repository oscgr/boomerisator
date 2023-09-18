import { random } from 'lodash'
import { Options } from '../../index'

const upperCase = (word: string, options: Options): string => {
  if (random() < options.typoRate) return word.toLocaleUpperCase()

  return word
}
export default upperCase
