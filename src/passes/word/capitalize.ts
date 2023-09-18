import { capitalize as c, random } from 'lodash'
import { Options } from '../../index'

const capitalize = (word: string, options: Options): string => {
  if (random() < options.typoRate) return c(word) || ''

  return word
}
export default capitalize
