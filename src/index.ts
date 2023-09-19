import rand, { RandomGenerator } from 'pure-rand'
import letterPasses from './passes/letter'
import wordPasses from './passes/word'

export type Options = {
  typoRate: number
  runs: number
  insanity: number
  mood?: 'sad' | 'angry' | 'happy'
  rng: RandomGenerator
}
export type Seed = {
  seed: number
}

/**
 * Options:
 * seed       - Seed pour gestion random          - par défaut aléatoire // TODO
 * typoRate   - Taux d'erreur de faute de frappe  - par défaut 0.1 // TODO
 * runs       - Nombre de passes                  - par défaut 1   // TODO
 * insanity   - Taux de folie                     - par défaut 0.3 // TODO
 * mood       - Humeur                            - not set // TODO
 */
export class Boomerisator {
  private readonly input: string
  private readonly options: Options

  constructor(input: string, options?: Partial<Omit<Options, 'rng'> & Seed>) {
    this.input = input
    this.options = {
      rng: rand.xoroshiro128plus(
        options?.seed || Date.now() ^ (Math.random() * 0x100000000)
      ),
      mood: options?.mood,
      runs: options?.runs || 1,
      insanity: options?.insanity || 0.3,
      typoRate: options?.typoRate || 0.1,
    }
  }

  getInput() {
    return this.input
  }

  generate(): string {
    return generate(this)
  }

  random(min = 0, max?: number) {
    const [value, newRng] = rand.uniformIntDistribution(
      min,
      max || 1,
      this.options.rng
    )
    this.options.rng = newRng

    return value
  }
}

export const generate = (generator: Boomerisator): string => {
  // --- GLOBAL PASSES --- //
  let output = globalPasses(generator.getInput())
  console.info('[GLOBAl]', output)
  // --- WORD PASSES --- //
  output = wordPasses(output, generator)
  console.info('[WORDS]', output)
  // --- LETTER PASSES --- //
  output = letterPasses(output, generator)
  console.info('[LETTERS]', output)
  return output
}

// TODO global passes - input
const globalPasses = (input: string) => {
  return input
}
