/* helper function that extracts a substring from a string with certain delimiter */

export const subString = (strData: string, delimiter: string) => {
  const result = strData.split(delimiter)

  return result
}
