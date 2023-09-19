import capitalize from './capitalize'
import upperCase from './uppercase'
import punctuation from './punctuation'
import { Boomerisator } from '../../index'

const wordPasses = (input: string, generator: Boomerisator) => {
  const wordReplacer = (word: string) => {
    let out = word
    if ('' === word) return word

    if (generator.random(0, 10) < 2) {
      out = capitalize(out)
    } else if (generator.random(0, 10) < 3) {
      out = upperCase(out)
    }
    if (generator.random(0, 10) < 1) {
      out = punctuation(out, generator)
    }
    return out
  }

  const words = input.split(/(?:(?![×Þß÷þø])[^-'0-9a-zÀ-ÿ])+/gim)
  const betweenWords = input.split(/(?:(?![×Þß÷þø])[-'0-9a-zÀ-ÿ])+/gim)

  return words.reduce((output, word, i) => {
    return `${output}${betweenWords[i]}${wordReplacer(word)}`
  }, '')
}

export default wordPasses
