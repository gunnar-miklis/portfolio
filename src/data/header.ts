type HeaderTitle = { version: number; hook: string; context: string; offer: string };
type HeaderTitleVersion = (typeof headerTitles)[number]['version'];

const selectedVersion: HeaderTitleVersion = 3;
const headerTitles = [
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
] as const satisfies HeaderTitle[];

function getSelectedVersion() {
  const selectedHeaderTitle = headerTitles.find(({ version }) => version === selectedVersion);

  if (selectedHeaderTitle) return selectedHeaderTitle;
  else return headerTitles[headerTitles.length - 1]; // latest version (as fallback)
}

export const title = getSelectedVersion().hook;
export const subtitle = getSelectedVersion().context + ' ' + getSelectedVersion().offer;
