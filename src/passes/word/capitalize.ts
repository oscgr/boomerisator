import { capitalize as c } from 'lodash'

const capitalize = (word: string): string => {
  return c(word) || ''
}
export default capitalize
