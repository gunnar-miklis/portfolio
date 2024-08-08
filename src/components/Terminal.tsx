import Icon from '@mui/icons-material/ChevronRight';
import MaximizeIcon from '@mui/icons-material/CropSquare';
import MinimizeIcon from '@mui/icons-material/Minimize';
import AwesomeIcon from '@mui/icons-material/AutoAwesomeRounded';
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import CenterFocusWeakRoundedIcon from '@mui/icons-material/CenterFocusWeakRounded';
import CloseIcon from '@mui/icons-material/Close';
import '@/styles/terminal.css';
import ExternalLink from './ExternalLink';

export default function Terminal() {
  return (
    <article className='terminal window paper'>
      <div className='window-top-bar'>
        <h3>About</h3>
        <div>
          <span>
            <MinimizeIcon />
          </span>
          <span>
            <MaximizeIcon />
          </span>
          <span>
            <CloseIcon />
          </span>
        </div>
      </div>

      <div className='window-content'>
        <div>
          <p className='in'>
            <Icon /> gunnar.hello
          </p>
          <p className='out'>
            Nice to meet you!&nbsp; <AwesomeIcon fontSize='small' />
          </p>
          <p className='out'>I develop Single Page Web Applications and RESTful APIs.</p>
          <p className='out'>
            Whether frontend or backend, as Full-Stack Web Developer I unify both.
          </p>
        </div>

        <div>
          <p className='in'>
            <Icon /> gunnar.isOpenForWork && when
          </p>
          <p className='out'>
            <span style={{ color: '#e64a19', fontWeight: 700 }}>TRUE</span>; immediately
          </p>
        </div>

        <div>
          <p className='in'>
            <Icon /> gunnar.skills.technical
          </p>
          <p className='out'>
            [ TypeScript, JavaScript, Node.js, Next.js, React, React Native, Express, MongoDB, SQLite,
            Lighthouse, git, Linux, R ]
          </p>
        </div>

        <div>
          <p className='in'>
            <Icon /> gunnar.skills.practices
          </p>
          <p className='out'>
            [ DRY, KISS, YAGNI, SOLID, Separation of Concerns, CI/CD, TDD, DevOps, REST, SPA, SSR, CSR, OOP,
            Accessibility ]
          </p>
        </div>

        <div>
          <p className='in'>
            <Icon /> gunnar.skills.personal
          </p>
          <p className='out'>
            [ Analytical Skills, Problem Solving, Customer-Centered, Open-minded, Curiosity,
            Passionate, Fast Learning, Collaboration, Interdisciplinary, Agile ]
          </p>
        </div>

        <div>
          <p className='in'>
            <Icon /> gunnar.personality
          </p>
          <span
            className='out'
            style={{ display: 'inline-flex', flexFlow: 'column nowrap', alignItems: 'flex-start' }}
          >
            <span>{`{ `}</span>

            <ul className='list' style={{ marginLeft: '1rem' }}>
              <li>
                <AutoGraphRoundedIcon fontSize='small' />
                Loves new challenges, eager to learn.
              </li>
              <li>
                <Diversity1Icon fontSize='small' />
                Calm and patient individual, easy to get along.
              </li>
              <li>
                <CenterFocusWeakRoundedIcon fontSize='small' />
                Attention-to-detail, conscientious and diligent, high quality delivery.
              </li>
            </ul>

            <span>{`} `}</span>
          </span>
        </div>

        <div>
          <p className='in'>
            <Icon /> gunnar.languages
          </p>
          <p className='out'>{`{ English: Fluent, German: Native }`}</p>
        </div>

        <div>
          <p className='in'>
            <Icon /> gunnar.contactInfo
          </p>
          <p className='out'>
            [&nbsp;
            <a
              className='link'
              href='mailto:gunnar.miklis@gmail.com'
              target='_blank'
              rel='noreferrer'
              title='Sent an Email (opens external dialog)'
              aria-label='Sent an Email (opens external dialog)'
            >
              E-Mail
            </a>
            ,&nbsp;
            <ExternalLink href='https://linkedin.com/in/gunnar-miklis' title='LinkedIn' />
            ,&nbsp;
            <ExternalLink href='https://github.com/gunnar-miklis' title='GitHub' />
            &nbsp;]
          </p>
        </div>

        <div>
          <p className='in'>
            <Icon /> gunnar.resume
          </p>
          <p className='out'>
            <ExternalLink href='https://flowcv.com/resume/u6jisbb5w9' title='Resume'>
              gunnar-miklis.pdf
            </ExternalLink>
          </p>
        </div>

        <div>
          <p className='in'>
            <Icon /> gunnar.currentLocation
          </p>
          <p className='out'>Berlin, Germany</p>
        </div>

        <div>
          <p className='in'>
            <Icon /> <span className='cursor' />
          </p>
          <p className='out'></p>
        </div>
      </div>
    </article>
  );
}
