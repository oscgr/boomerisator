import typo from './passes/letter/typo'
import capitalize from './passes/word/capitalize'
import upperCase from './passes/word/uppercase'

/**
 * typoRate   - Taux d'erreur de faute de frappe  - par défaut 0.1 // TODO
 * runs       - Nombre de passes                  - par défaut 1   // TODO
 * insanity   - Taux de folie                     - par défaut 0.3 // TODO
 * seed       - Seed pour gestion random          - par défaut aléatoire // TODO
 * mood       - Humeur                            - not set // TODO
 */
export type Options = {
  typoRate: number
  runs: number
  insanity: number
  seed: number
  mood?: 'sad' | 'angry' | 'happy'
}

export const generate = (input: string, options?: Partial<Options>) => {
  const definedOptions = {
    typoRate: 0.1,
    runs: 1,
    insanity: 0.3,
    seed: 10,
  } satisfies Options

  // --- GLOBAL PASSES --- //
  let output = globalPasses(input, definedOptions)
  console.info('[GLOBAl]', output)
  // --- WORD PASSES --- //
  output = wordPasses(output, definedOptions)
  console.info('[WORDS]', output)
  // --- LETTER PASSES --- //
  output = letterPasses(output, definedOptions)
  console.info('[LETTERS]', output)
  return output
}

const globalPasses = (input: string, options: Options) => {
  // TODO global passes - input
  return input
}
const wordPasses = (input: string, options: Options) => {
  const wordReplacer = (word: string) => {
    let out = word
    out = capitalize(out, options)
    out = upperCase(out, options)

    // TODO word passes - w

    return out
  }
  const words = input.split(/(?:(?![×Þß÷þø])[^-'0-9a-zÀ-ÿ])+/gim)
  const betweenWords = input.split(/(?:(?![×Þß÷þø])[-'0-9a-zÀ-ÿ])+/gim)

  return words.reduce((output, word, i) => {
    return `${output}${betweenWords[i]}${wordReplacer(word)}`
  }, '')
}
const letterPasses = (input: string, options: Options) => {
  // output = words(output)
  return input
    .split('')
    .map((letter) => {
      // TODO letter passes - letter
      let output = letter
      if (letter !== ' ') output = typo(output, options)

      return output
    })
    .join('')
}
