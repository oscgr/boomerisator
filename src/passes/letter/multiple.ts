import { Boomerisator } from '../../index'

const multiple = (letter: string, generator: Boomerisator): string => {
  const filler = (length: number) => {
    return Array(length).fill(letter).join('')
  }
  const rd = generator.random(0, 10)
  if (rd < 5) {
    return filler(2)
  } else if (rd < 9) {
    return filler(3)
  } else {
    return filler(generator.random(1, 15))
  }
}
export default multiple
