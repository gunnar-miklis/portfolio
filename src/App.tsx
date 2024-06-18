import Card from './components/Card';
import Chip from './components/Chip';
import PhoneGearIcon from '@mui/icons-material/PhonelinkSetup';
import Terminal from './components/Terminal';

export default function App() {
  return (
    <>
      <Terminal />
      <Card
        title='Ticketing App'
        technologies={['React Native', 'Expo Go', 'SQLite', 'TypeScript']}
        liveDemo='unpublished'
        sourceCode='https://github.com/gunnar-miklis#latest-project'
        imageSources={[
          'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaHSigp0F2p4TOxtoOY65opCOvrS597T-WUcMU6_Bx2MZ_vNuU6LN6zcsUomqvcxzjX6n0sbzVfSXbrHX22YWeEWZHbnsiDt-Q=w1920-h991-rw-v1',
        ]}
        footnote="*The App isn't public yet. However, Version 1.0.0 already got tested recently during a music festival."
      >
        <p>
          For the validation of event tickets at the door check-in. Either scan &quot;QR-Code
          tickets&quot; or check-in &quot;Box Office tickets&quot;. Intentionally built for offline
          use, because the current venue has poor internet coverage.
        </p>

        <div className='paper paper-spacing'>
          <ul className='list'>
            <li>
              <PhoneGearIcon /> QR-Code Scanner/Camera.
            </li>
            <li>
              <PhoneGearIcon /> Offline storage (without internet).
            </li>
            <li>
              <PhoneGearIcon /> Two ticket types: qr-code & box office.
            </li>
            <li>
              <PhoneGearIcon /> Download, update, search or filter a list of tickets.
            </li>
            <li>
              <PhoneGearIcon /> Statistics for: total sales & daily checkins.
            </li>
            <li>
              <PhoneGearIcon /> Counter for recent checkins.
            </li>
            <li>
              <PhoneGearIcon /> Light/Dark theme.
            </li>
            <li>
              <PhoneGearIcon /> Switch Languages.
            </li>
            <li>
              <PhoneGearIcon /> Always keep screen awake.
            </li>
          </ul>
        </div>
      </Card>

      <Card
        title='Todo App'
        technologies={['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Vite']}
        liveDemo='https://main--restful-api-web-app.netlify.app/'
        sourceCode='https://github.com/gunnar-miklis/restful-api-web-app'
        imageSources={[
          'https://github.com/gunnar-miklis/restful-api-web-app/raw/main/showcase/Screenshot%202023-08-29%20222357.png',
        ]}
      >
        <p>
          Develop a RESTful API Full-Stack Web Application using MERN-Stack (MongoDB, Express,
          React, Node) and JavaScript as main language, in less than 48-hours.
        </p>
      </Card>

      <Card
        title='Tip Calculator App'
        technologies={['React', 'MUi', 'JSS', 'Vite']}
        liveDemo='https://main--tip-calculator-57d393.netlify.app/'
        sourceCode='https://github.com/gunnar-miklis/frontend-challenges/tree/main/tip-calculator/solutions/react-mui'
        imageSources={[
          'https://github.com/gunnar-miklis/frontend-challenges/raw/main/tip-calculator/solutions/react-mui/screenshots/Screenshot%202023-08-27%20210926.png',
        ]}
      >
        <p>
          Part of my practice projects. Re-create frontend designs provided by{' '}
          <a href='https://www.frontendmentor.io' className='link'>
            Frontend Mentor
          </a>
          .
        </p>
        <div className='paper paper-spacing'>
          <ul className='list'>
            <li>
              <PhoneGearIcon /> Mobile-first. Full responsive (phone, tablet, laptop)
            </li>
            <li>
              <PhoneGearIcon /> Calculator functionality.
            </li>
            <li>
              <PhoneGearIcon /> Using MUi components (input field, snackbar, grids, paper), color
              palettes and typography.
            </li>
            <li>
              <PhoneGearIcon /> Customize theme based on style guide.
            </li>
          </ul>
        </div>
      </Card>

      <Card
        title='Web Platform'
        technologies={['React', 'MUi', 'JSS', 'Vite']}
        liveDemo='https://gunnar-miklis.github.io/intro-to-material-ui-react/'
        sourceCode='https://github.com/gunnar-miklis/intro-to-material-ui-react'
        imageSources={[
          'https://github.com/gunnar-miklis/intro-to-material-ui-react/blob/main/screenshots/Screenshot%202023-08-15%20163617.png?raw=true',
          'https://github.com/gunnar-miklis/intro-to-material-ui-react/raw/main/screenshots/Screenshot%202023-08-15%20163658.png?raw=true',
          'https://github.com/gunnar-miklis/intro-to-material-ui-react/raw/main/screenshots/Screenshot%202023-08-15%20163734.png?raw=true',
        ]}
      >
        <p>
          Introduction into Material UI following the{' '}
          <a
            href='https://www.youtube.com/playlist?list=PLDxCaNaYIuUlG5ZqoQzFE27CUOoQvOqnQ'
            className='link'
          >
            MUI Series
          </a>
          .
        </p>
        <div className='paper paper-spacing'>
          <ul className='list'>
            <li>
              <PhoneGearIcon /> Grid Layout, Navbar and Routing, Header, Notification, Tooltips.
            </li>
            <li>
              <PhoneGearIcon /> Modal, Form Input, Form Validation, Searchbar, Filter Function.
            </li>
            <li>
              <PhoneGearIcon /> Dynamic Data Table, Pagination, Page Size.
            </li>
            <li>
              <PhoneGearIcon /> Progress Stepper, Conditional Next/Back/Finish/Reset Functionality.
            </li>
            <li>
              <PhoneGearIcon /> Loading Skeleton.
            </li>
            <li>
              <PhoneGearIcon /> Snackbar/Alert Functionality.
            </li>
          </ul>
        </div>
      </Card>

      <Card
        title='Summary Component'
        technologies={['HTML', 'CSS', 'React', 'Vite']}
        liveDemo='unpublished'
        sourceCode='https://github.com/gunnar-miklis/frontend-challenges/tree/main/summary-component/solutions'
        imageSources={[
          'https://github.com/gunnar-miklis/frontend-challenges/raw/main/summary-component/solutions/ViteReact/src/assets/demo/Screenshot%202023-07-13%20172458.png',
        ]}
      >
        <p>
          Part of my practice projects. Re-create frontend designs provided by{' '}
          <a href='https://www.frontendmentor.io' className='link'>
            Frontend Mentor
          </a>
          .
        </p>
      </Card>

      <Card
        title='QR Code Component'
        technologies={['HTML', 'CSS', 'Bootstrap', 'React Native', 'Expo Go']}
        liveDemo='unpublished'
        sourceCode='https://github.com/gunnar-miklis/frontend-challenges/tree/main/qr-code-component/solutions'
        imageSources={[
          'https://github.com/gunnar-miklis/frontend-challenges/raw/main/qr-code-component/solutions/ReactNative/Screenshot_20230709-214738.png',
        ]}
      >
        <p>
          Part of my practice projects. Re-create frontend designs provided by{' '}
          <a href='https://www.frontendmentor.io' className='link'>
            Frontend Mentor
          </a>
          . Re-create this QR Code Component in three different ways: 1. HTML + CSS, 2. HTML + CSS +
          Bootstrap, 3. React Native{' '}
        </p>
      </Card>

      <div className='paper'>
        <div className='card-container'>
          <div className='card-image'>
            <img src='https://images.unsplash.com/photo-1597176874083-193e47324499' />
          </div>
          <div className='card-content paper-spacing-lg gap-md'>
            <div>
              <h1>First Title</h1>
              <h2>Subtitle</h2>
              <h3>Heading</h3>
              <p>paragraph text</p>
              <p className='annotation'>annotation</p>
              <span>
                <a className='link'>Link</a>
              </span>
            </div>

            <div className='paper paper-spacing' style={{ flexFlow: 'row wrap' }}>
              <Chip>Chip</Chip>
              <Chip>Chip</Chip>
              <Chip>Chip</Chip>
              <Chip>Chip</Chip>
              <Chip>Chip</Chip>
              <Chip>Chip</Chip>
            </div>

            <div className='paper paper-spacing' style={{ flexFlow: 'row wrap' }}>
              <input className='input' placeholder='placeholder' />
              <button className='button'>Button</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
