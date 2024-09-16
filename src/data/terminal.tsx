import type { ReactNode } from 'react';
import AwesomeIcon from '@mui/icons-material/AutoAwesomeRounded';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import CenterFocusWeakRoundedIcon from '@mui/icons-material/CenterFocusWeakRounded';

import ExternalLink from '@components/common/ExternalLink';
import styles from '@styles/terminal.module.css';

const name = 'gunnar';

type AboutListItem = {
  in: string;
  out: string | ReactNode;
};

export const aboutListItems: AboutListItem[] = [
  {
    in: `${name}.hello`,
    out: (
      <>
        <p className={styles['terminal__text-with-icon']}>
          Nice to meet you!
          <AwesomeIcon fontSize='small' />
        </p>
        <p>
          With a dedication for user-centered experience, I develop web applications by bringing
          together frontend and backend technologies. I&apos;m committed to deliver maintainable and
          high quality software, while staying flexible with evolving tech trends.
        </p>
        <p>
          I thrive in collaborative environments where I passionately and conscientiously contribute
          and strive to exceed expectations.
        </p>
      </>
    ),
  },
  {
    in: `${name}.isOpenForWork && when`,
    out: (
      <>
        <span className={styles['terminal__text-highlight']}>TRUE</span>; immediately
      </>
    ),
  },
  {
    in: `${name}.skills.technical`,
    out: '[ TypeScript, JavaScript, Node.js, Next.js, React, React Native, Express, MongoDB, SQLite, Vitest, Lighthouse, git, Linux, R ]',
  },
  {
    in: `${name}.skills.practices`,
    out: '[ DRY, KISS, SOLID, Separation of Concerns, CI/CD, TDD, Unit Test, DevOps, REST, SPA, SSR, CSR, OOP, Accessibility ]',
  },
  {
    in: `${name}.skills.personal`,
    out: '[ Analytical Skills, Problem Solving, Customer-Centered, Open-minded, Curiosity, Passionate, Fast Learning, Collaboration, Interdisciplinary ]',
  },
  {
    in: `${name}.personality`,
    out: (
      <>
        <p className={styles['terminal__text-with-icon']}>
          <AutoGraphRoundedIcon fontSize='small' /> Loves new challenges, eager to learn.
        </p>
        <p className={styles['terminal__text-with-icon']}>
          <Diversity1Icon fontSize='small' /> Calm and patient individual, easy to get along.
        </p>
        <p className={styles['terminal__text-with-icon']}>
          <CenterFocusWeakRoundedIcon fontSize='small' /> Attention-to-detail, conscientious and
          diligent, high quality delivery.
        </p>
      </>
    ),
  },
  {
    in: `${name}.languages`,
    out: '{ English: Fluent, German: Native }',
  },
  {
    in: `${name}.contactInfo`,
    out: (
      <>
        [&nbsp;
        <ExternalLink
          href='mailto:gunnar.miklis@gmail.com'
          title='Sent an Email (opens external dialog)'
        >
          E-Mail
        </ExternalLink>
        ,&nbsp;
        <ExternalLink href='https://linkedin.com/in/gunnar-miklis' title='LinkedIn' />
        ,&nbsp;
        <ExternalLink href='https://github.com/gunnar-miklis' title='GitHub' />
        &nbsp;]
      </>
    ),
  },
  {
    in: `${name}.resume`,
    out: (
      <ExternalLink href='https://flowcv.com/resume/u6jisbb5w9' title='Resume'>
        ./gunnar-miklis.pdf
      </ExternalLink>
    ),
  },
  {
    in: `${name}.currentLocation`,
    out: 'Berlin, Germany',
  },
];
