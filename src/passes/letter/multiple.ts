import { Boomerisator } from '../../index'

const multiple = (letter: string, generator: Boomerisator): string => {
  const filler = (length: number) => {
    return Array(length).fill(letter).join('')
  }
  const rd = generator.random(0, 100)
  if (rd < 70) {
    return filler(2)
  } else if (rd < 95) {
    return filler(3)
  } else {
    return filler(Math.floor(Math.log2(generator.random(2, 400))))
  }
}
export default multiple
