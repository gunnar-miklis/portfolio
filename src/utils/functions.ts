/**
 * Creates a slug based on the given string. Appending a suffix is optional.
 *
 * @example
 * createSlug('Amazing Project!!!'); // => "amazing-project"
 * createSlug('Amazing Project!!!', 'div'); // => "amazing-project-div"
 *
 * @param {string} str - the string to create a slug from.
 * @param {string} [suffix] - optional, a suffix (e.g. HTML element as distinct reference).
 * @returns {string} the formatted string as slug or the formatted string + the htmlElement.
 */
export function createSlug(str: string, suffix?: string): string {
  const formattedStr = str
    .toLowerCase()
    .replace(/\W+(?=\W?)/g, '-') // replaces everything non-word char with "-"
    .replace(/(^\W+)|(\W+$)/g, ''); // remove a non-word char at the beginning and end of the string

  if (suffix) return formattedStr + '-' + suffix;
  else return formattedStr;
}