import { Boomerisator } from '../../index'

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

const punctuation = (word: string, generator: Boomerisator): string => {
  return `${word}${punctuations[generator.random(0, punctuations.length - 1)]}`
}
export default punctuation
