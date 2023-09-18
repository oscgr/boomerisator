import { random } from 'lodash'
import { Options } from '../../index'

const punctuations = [
  ' (!!!)',
  '😂',
  '🤣',
  '💀',
  '🙏',
  '😭',
  '!!!!!!!!!!!!',
  '...........',
  ';',
  '.',
]

const punctuation = (word: string, options: Options): string => {
  if (random() < options.typoRate) {
    return `${word}${punctuations[random(0, punctuations.length - 1)]}`
  }

  return word
}
export default punctuation
