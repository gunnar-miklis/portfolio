import Icon from '@mui/icons-material/ChevronRight';
import WindowTopBar from './WindowTopBar';
import '@/styles/terminal.css';

export default function Terminal() {
  return (
    <article className='terminal window paper'>
      <WindowTopBar title='About' />

      <div className='window-content'>
        <div>
          <p className='in'>
            <Icon /> gunnar.hello
          </p>
          <p className='out'>Nice to meet you! 👋</p>
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
            <span style={{ color: '#e66033CC', fontWeight: 600 }}>TRUE</span>; immediately
          </p>
        </div>

        <div>
          <p className='in'>
            <Icon /> gunnar.skills.technical
          </p>
          <p className='out'>
            [ TypeScript, JavaScript, Node, React, React Native, Express, MongoDB, SQL, git, GitHub,
            R, Ubuntu Shell ]
          </p>
        </div>

        <div>
          <p className='in'>
            <Icon /> gunnar.skills.personal
          </p>
          <p className='out'>
            [ Fast Learning, Problem Solving, Analytical Skills, Collaboration, Customer-Centered,
            Curiosity, Open-minded, Passionate, Interdisciplinary, Agile, Flexibility ]
          </p>
        </div>

        <div>
          <p className='in'>
            <Icon /> gunnar.personality
          </p>
          <p
            className='out'
            style={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'flex-start' }}
          >
            <span>{`{ `}</span>
            <span style={{ paddingLeft: '1rem' }}>🌱: Loves new challenges, eager to learn.</span>
            <span style={{ paddingLeft: '1rem' }}>
              🧘: Calm and patient individual, easy to get along.
            </span>
            <span style={{ paddingLeft: '1rem' }}>
              🔍: Attention-to-detail, aiming to build visually appealing web apps.
            </span>
            <span>{`} `}</span>
          </p>
        </div>

        <div>
          <p className='in'>
            <Icon /> gunnar.languages
          </p>
          <p className='out'>{`{ English: Fluent, German: Native, Japanese: Basic }`}</p>
        </div>

        <div>
          <p className='in'>
            <Icon /> gunnar.contactInfo
          </p>
          <p className='out'>
            [&nbsp;
            <a
              href='mailto:gunnar.miklis@gmail.com'
              target='_blank'
              className='link'
              rel='noreferrer'
            >
              E-Mail
            </a>
            ,&nbsp;
            <a
              href='https://linkedin.com/in/gunnar-miklis'
              target='_blank'
              className='link'
              rel='noreferrer'
            >
              LinkedIn
            </a>
            ,&nbsp;
            <a
              href='https://github.com/gunnar-miklis'
              target='_blank'
              className='link'
              rel='noreferrer'
            >
              Github
            </a>
            &nbsp;]
          </p>
        </div>

        <div>
          <p className='in'>
            <Icon /> gunnar.resume
          </p>
          <p className='out'>
            <a
              href='https://flowcv.com/resume/u6jisbb5w9'
              target='_blank'
              className='link'
              rel='noreferrer'
            >
              gunnar-miklis.pdf
            </a>
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
