interface Versions {
  [num: number]: {
    hook: string;
    context: string;
    offer: string;
  };
}

const versions: Versions = {
  1: {
    hook: 'Apps with user-centered approach unlock potential.',
    context:
      'I believe intuitive, continually evolving products that are both functional and enjoyable will deeply resonate with users and transform their experience.',
    offer: 'I aim for a user-centered approach and high quality delivery.',
  },
  2: {
    hook: 'While AI can streamline tasks, it can also lead to an unreliable and messy code base.',
    context:
      'Effective AI integration needs to be managed properly to ensure software quality including maintainability, scalability, security, and usability.',
    offer: 'I aim for high software quality and a user-centered approach.',
  },
  3: {
    hook: 'Apps with a user-centered approach unlock potential.',
    context:
      'I believe intuitive, continually evolving products that are both functional and enjoyable will deeply resonate with users and transform their experience.',
    offer: 'I aim to deliver high software quality and user-focused solutions.',
  },
};

const selected: number = 3;

export const title = `${versions[selected].hook}`;
export const subtitle = `${versions[selected].context} ${versions[selected].offer}`;
