import { random } from 'lodash'
import { Options } from '../../index'

const upperCase = (letter: string, options: Options): string => {
  if (random() < options.typoRate) return letter.toLocaleUpperCase()

  return letter
}
export default upperCase
