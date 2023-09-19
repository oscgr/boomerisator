import { deburr as d } from 'lodash'

const deburr = (letter: string): string => {
  return d(letter)
}
export default deburr
