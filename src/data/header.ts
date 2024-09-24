type Header = { version: number; hook: string; context: string; offer: string };
type HeaderVersion = (typeof headers)[number]['version'];

export const headers = [
  {
    version: 1,
    hook: 'Apps with user-centered approach unlock potential.',
    context:
      'I believe intuitive, continually evolving products that are both functional and enjoyable will deeply resonate with users and transform their experience.',
    offer: 'I aim for a user-centered approach and high quality delivery.',
  },
  {
    version: 2,
    hook: 'While AI can streamline tasks, it can also lead to an unreliable and messy code base.',
    context:
      'Effective AI integration needs to be managed properly to ensure software quality including maintainability, scalability, security, and usability.',
    offer: 'I aim for high software quality and a user-centered approach.',
  },
  {
    version: 3,
    hook: 'Apps with a user-centered approach unlock potential.',
    context:
      'I believe intuitive, continually evolving products that are both functional and enjoyable will deeply resonate with users and transform their experience.',
    offer: 'I aim to deliver high software quality and user-focused solutions.',
  },
] as const satisfies Header[];

/**
 * Selects a header from the given array that matches the given version.
 * If no such version is found, it returns the latest version (i.e. the last element in the array).
 * @param arr The array of headers to select from.
 * @param ver The version of the header to select. Defaults to the value of {@link selectedVersion}.
 * @returns The selected header.
 */
export function getHeaderVersionFrom(arr: Header[], ver = selectedVersion): Header {
  const selectedHeader = arr.find(({ version }) => version === ver);
  if (selectedHeader) return selectedHeader;
  else return arr[arr.length - 1];
}

export const selectedVersion: HeaderVersion = 3;
export const title = getHeaderVersionFrom(headers).hook;
export const subtitle =
  getHeaderVersionFrom(headers).context + ' ' + getHeaderVersionFrom(headers).offer;
