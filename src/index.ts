import { clone, words } from 'lodash'

/**
 * typoRate   - Taux d'erreur de faute de frappe  - par défaut 0.1 // TODO
 * runs       - Nombre de passes                  - par défaut 1   // TODO
 * insanity   - Taux de folie                     - par défaut 0.3 // TODO
 * seed       - Seed pour gestion random          - par défaut aléatoire // TODO
 */
export type Options = {
  typoRate: number
  runs: number
  insanity: number
  seed: number
}

export const generate = (input: string, options?: Partial<Options>) => {
  const definedOptions = {
    typoRate: 0.1,
    runs: 1,
    insanity: 0.3,
    seed: 10,
  } satisfies Options

  let output = input

  // --- GLOBAL PASSES --- //
  output = globalPasses(input, definedOptions)
  // --- WORD PASSES --- //
  output = wordPasses(input, definedOptions)
  // --- LETTER PASSES --- //
  output = letterPasses(input, definedOptions)
  return output
}

const globalPasses = (input: string, options: Options) => {
  // TODO global passes - input
  return input
}
const wordPasses = (input: string, options: Options) => {
  const pristineWords = words(input)
  const w = clone(pristineWords)

  // TODO word passes - w

  return pristineWords.reduce((acc, pristineWord, i) => {
    return `${acc}${input.replace(pristineWord, w[i])}`
  }, '')
}
const letterPasses = (input: string, options: Options) => {
  // output = words(output)
  return input
    .split('')
    .map((letter) => {
      // TODO letter passes - letter

      return letter
    })
    .join('')

  return input
}
