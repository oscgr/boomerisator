/**
 * typoRate   - Taux d'erreur de faute de frappe  - par défaut 0.1 // TODO
 * runs       - Nombre de passes                  - par défaut 1   // TODO
 * insanity   - Taux de folie                     - par défaut 0.3 // TODO
 */
export type Options = {
  typoRate: number
  runs: number
  insanity: number
}

export const generate = (input: string, options?: Options) => {
  console.log(input, 'toto')
  return input
}
