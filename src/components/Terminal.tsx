import Icon from '@mui/icons-material/ChevronRight';
import MaximizeIcon from '@mui/icons-material/CropSquare';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import '@/styles/terminal.css';

export default function Terminal() {
  return (
    <article className='terminal window paper'>
      <div className='window-top-bar'>
        <p>About</p>
        <div>
          <span>
            <MinimizeIcon />
          </span>
          <span>
            <MaximizeIcon />
          </span>
          <span style={{ backgroundColor: '#e66033dd' }}>
            <CloseIcon />
          </span>
        </div>
      </div>

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
            [ TypeScript, JavaScript, React, React Native, Node, Express, MongoDB, SQL, git, GitHub,
            R, (Ubuntu) Shell ]
          </p>
        </div>

        <div>
          <p className='in'>
            <Icon /> gunnar.skills.personal
          </p>
          <p className='out'>
            [ Analytical Skills, Problem Solving, Fast Learning, Collaboration, Customer-Centered,
            Open-minded, Curiosity, Passionate, Interdisciplinary, Agile ]
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
              🔍: Attention-to-detail and diligent, aiming to build visually appealing web apps.
            </span>
            <span>{`} `}</span>
          </p>
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
