import type { ReactNode } from 'react';
import AwesomeIcon from '@mui/icons-material/AutoAwesomeRounded';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import CenterFocusWeakRoundedIcon from '@mui/icons-material/CenterFocusWeakRounded';

import ExternalLink from '@components/common/ExternalLink/ExternalLink';
import '@components/layout/terminal.css';

const name = 'gunnar';

type AboutListItem = {
  in: string;
  out: ReactNode;
};

export const aboutListItems: AboutListItem[] = [
  {
    in: `${name}.hello`,
    out: (
      <>
        <p className='terminal__text-with-icon'>
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
      <p>
        <span className='terminal__text-highlight'>TRUE</span>; immediately
      </p>
    ),
  },
  {
    in: `${name}.skills.technical`,
    out: (
      <p>
        &#91; TypeScript, JavaScript, Node.js, Next.js, React, React Native, Express, MongoDB,
        SQLite, Vitest, Lighthouse, git, Linux, R &#93;
      </p>
    ),
  },
  {
    in: `${name}.skills.practices`,
    out: (
      <p>
        &#91; DRY, KISS, SOLID, Separation of Concerns, CI/CD, TDD, Unit Test, DevOps, REST, SPA,
        SSR, CSR, OOP, Accessibility &#93;
      </p>
    ),
  },
  {
    in: `${name}.skills.personal`,
    out: (
      <p>
        &#91; Analytical Skills, Problem Solving, Customer-Centered, Open-minded, Curiosity,
        Passionate, Fast Learning, Collaboration, Interdisciplinary &#93;
      </p>
    ),
  },
  {
    in: `${name}.personality`,
    out: (
      <>
        <p className='terminal__text-with-icon'>
          <AutoGraphRoundedIcon fontSize='small' /> Loves new challenges, eager to learn.
        </p>
        <p className='terminal__text-with-icon'>
          <Diversity1Icon fontSize='small' /> Calm and patient individual, easy to get along.
        </p>
        <p className='terminal__text-with-icon'>
          <CenterFocusWeakRoundedIcon fontSize='small' /> Attention-to-detail, conscientious and
          diligent, high quality delivery.
        </p>
      </>
    ),
  },
  {
    in: `${name}.languages`,
    out: <p>&#123; English: Fluent, German: Native &#125;</p>,
  },
  {
    in: `${name}.contactInfo`,
    out: (
      <>
        &#91;&nbsp;
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
        &nbsp;&#93;
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
    out: <p>Berlin, Germany</p>,
  },
];
