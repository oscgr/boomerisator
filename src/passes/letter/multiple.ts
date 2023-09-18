import { random } from 'lodash'
import { Options } from '../../index'

const multiple = (letter: string, options: Options): string => {
  if (random() < options.typoRate) {
    const nb = Math.floor(Math.log(Math.random() + 1) * 3) || 1
    return Array(nb).fill(letter).join('')
  }

  return letter
}
export default multiple
