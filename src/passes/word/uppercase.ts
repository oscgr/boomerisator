import { upperCase as u, random } from 'lodash'
import { Options } from '../../index'

const upperCase = (word: string, options: Options): string => {
  if (random() < options.typoRate) return u(word)

  return word
}
export default upperCase
