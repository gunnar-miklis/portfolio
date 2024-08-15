import AwesomeIcon from '@mui/icons-material/AutoAwesomeRounded';
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import CenterFocusWeakRoundedIcon from '@mui/icons-material/CenterFocusWeakRounded';
import ExternalLink from '../components/common/ExternalLink';
import { type ReactNode } from 'react';

const name: string = 'gunnar';

interface About {
  [keypoint: string]: {
    in: string;
    out: string | ReactNode;
  };
}

export const about: About = {
  hello: {
    in: `${name}.hello`,
    out: (
      <>
        <span style={{ display: 'inline-flex', flexFlow: 'row nowrap', alignItems: 'center' }}>
          Nice to meet you!&nbsp; <AwesomeIcon fontSize='small' />
        </span>
        <span>I develop Single Page Web Applications and RESTful APIs.</span>
        <span>Whether frontend or backend, as Full-Stack Web Developer I unify both.</span>
      </>
    ),
  },
  isOpenForWork: {
    in: `${name}.isOpenForWork && when`,
    out: (
      <span style={{ display: 'inline-flex', flexFlow: 'row nowrap' }}>
        <span style={{ color: '#e64a19', fontWeight: 700 }}>TRUE</span>; immediately
      </span>
    ),
  },
  skillsTechnical: {
    in: `${name}.skills.technical`,
    out: '[ TypeScript, JavaScript, Node.js, Next.js, React, React Native, Express, MongoDB, SQLite, Vitest, Lighthouse, git, Linux, R ]',
  },
  skillsPractices: {
    in: `${name}.skills.practices`,
    out: '[ DRY, KISS, SOLID, Separation of Concerns, CI/CD, TDD, Unit Test, DevOps, REST, SPA, SSR, CSR, OOP, Accessibility ]',
  },
  skillsPersonal: {
    in: `${name}.skills.personal`,
    out: '[ Analytical Skills, Problem Solving, Customer-Centered, Open-minded, Curiosity, Passionate, Fast Learning, Collaboration, Interdisciplinary ]',
  },
  personality: {
    in: `${name}.personality`,
    out: (
      <>
        <span style={{ display: 'inline-flex', flexFlow: 'row nowrap', gap: 'var(--space-sm)' }}>
          <AutoGraphRoundedIcon fontSize='small' /> Loves new challenges, eager to learn.
        </span>
        <span style={{ display: 'inline-flex', flexFlow: 'row nowrap', gap: 'var(--space-sm)' }}>
          <Diversity1Icon fontSize='small' /> Calm and patient individual, easy to get along.
        </span>
        <span style={{ display: 'inline-flex', flexFlow: 'row nowrap', gap: 'var(--space-sm)' }}>
          <CenterFocusWeakRoundedIcon fontSize='small' /> Attention-to-detail, conscientious and
          diligent, high quality delivery.
        </span>
      </>
    ),
  },
  languages: {
    in: `${name}.languages`,
    out: '{ English: Fluent, German: Native }',
  },
  contactInfo: {
    in: `${name}.contactInfo`,
    out: (
      <span style={{ display: 'inline-flex', flexFlow: 'row nowrap' }}>
        [&nbsp;
        <a
          className='link'
          href='mailto:gunnar.miklis@gmail.com'
          target='_blank'
          rel='noreferrer'
          title='Sent an Email (opens external dialog)'
          aria-label='Sent an Email (opens external dialog)'
          key={1}
        >
          E-Mail
        </a>
        ,&nbsp;
        <ExternalLink href='https://linkedin.com/in/gunnar-miklis' title='LinkedIn' key={2} />
        ,&nbsp;
        <ExternalLink href='https://github.com/gunnar-miklis' title='GitHub' key={3} />
        &nbsp;]
      </span>
    ),
  },
  resume: {
    in: `${name}.resume`,
    out: (
      <ExternalLink href='https://flowcv.com/resume/u6jisbb5w9' title='Resume'>
        ./gunnar-miklis.pdf
      </ExternalLink>
    ),
  },
  currentLocation: {
    in: `${name}.currentLocation`,
    out: 'Berlin, Germany',
  },
};
