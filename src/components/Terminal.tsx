import '@/styles/terminal.css';
import Icon from '@mui/icons-material/ChevronRight';
import MaximizeIcon from '@mui/icons-material/CropSquare';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';

export default function Terminal() {
  return (
    <div className='terminal paper'>
      <div className='window-top-bar'>
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

      <div className='window-content paper-spacing-lg'>
        <div>
          <p className='in'>
            <Icon /> gunnar.openForWork
          </p>
          <p className='out'>TRUE, immediately</p>
        </div>

        <div>
          <p className='in'>
            <Icon /> gunnar.skills.technical
          </p>
          <p className='out'>
            [ JavaScript, TypeScript, Node, React, React Native, Express, MongoDB, SQL, git, R,
            Shell, RESTful API, SPA ]
          </p>
        </div>

        <div>
          <p className='in'>
            <Icon /> gunnar.skills.personal
          </p>
          <p className='out'>
            [ Fast Learning, Problem Solving, Analytical Skills, Collaboration, Customer-Focused,
            Curiosity, Open-minded, Flexibility, Interdisciplinary, Agile ]
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
              gunnar.miklis@gmail.com
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
    </div>
  );
}
