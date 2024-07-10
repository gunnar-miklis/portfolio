import { ReactNode } from 'react';
import PhoneGearIcon from '@mui/icons-material/PhonelinkSetup';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import LooksThreeIcon from '@mui/icons-material/Looks3';
import ExternalLink from '../components/ExternalLink';
import ticketing from './../assets/ticketing.png';
import todo from './../assets/todo-list.png';
import tipCalc from './../assets/tip-calculator.png';
import webPlat from './../assets/web-platform.png';
import sumComp from './../assets/summary-comp.png';
import qrComp from './../assets/qr-code-comp.png';
import thatLevel from './../assets/that-level-again.png';
import repCount from './../assets/repcount.png';
import sleepMinder from './../assets/sleepminder.png';

export interface ProjectsType {
  [card: string]: Project;
}

export interface Project {
  id: number;
  title: string;
  content: ReactNode;
  technologies: string[];
  imageSources: string[];
  category?: string;
  date?: string;
  liveDemo?: string;
  sourceCode?: string;
  footnote?: string;
}

export const projects: ProjectsType = {
  eventTicketing: {
    id: 1,
    title: 'Event Ticketing',
    category: 'Latest Project',
    date: 'May 2024',
    technologies: ['TypeScript', 'React Native', 'Expo Go', 'SQLite'],
    sourceCode: 'https://github.com/gunnar-miklis#latest-project',
    imageSources: [ticketing],
    footnote:
      "*The App isn't public yet. However, Version 1.0.0 already got tested recently during a music festival.",
    content: (
      <>
        <p>
          For the validation of event tickets at the door check-in. Can either scan &quot;QR-Code
          tickets&quot; or check-in &quot;Box Office tickets&quot;. Intentionally built for offline
          use, because the current venue has poor internet coverage.
        </p>

        <div className='feature-list' title='Features' aria-label='Features'>
          <ul className='list'>
            <li>
              <PhoneGearIcon /> QR-Code Scanner/Camera.
            </li>
            <li>
              <PhoneGearIcon /> Offline storage (app works without internet).
            </li>
            <li>
              <PhoneGearIcon /> Manage two ticket types: qr-code & box office.
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
      </>
    ),
  },
  todoList: {
    id: 2,
    title: 'Todo List',
    date: 'Sep 2023',
    technologies: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Vite'],
    liveDemo: 'https://main--restful-api-web-app.netlify.app/',
    sourceCode: 'https://github.com/gunnar-miklis/restful-api-web-app',
    imageSources: [todo],
    footnote: '*This App was part of an application process.',
    content: (
      <p>
        Develop a RESTful API Full-Stack Web Application using MERN-Stack (MongoDB, Express, React,
        Node) and JavaScript as main language, in less than 48-hours.
      </p>
    ),
  },
  tipCalculator: {
    id: 3,
    title: 'Tip Calculator',
    category: 'Practice.Learn.Improve.',
    date: 'Aug 2023',
    technologies: ['React', 'MUI', 'JSS', 'Vite'],
    liveDemo: 'https://main--tip-calculator-57d393.netlify.app/',
    sourceCode:
      'https://github.com/gunnar-miklis/frontend-challenges/tree/main/tip-calculator/solutions/react-mui',
    imageSources: [tipCalc],
    content: (
      <>
        <p>
          Part of my practice projects. Re-create frontend designs provided by{' '}
          <ExternalLink href='https://www.frontendmentor.io' title='Frontend Mentor' />.
        </p>
        <div className='feature-list' title='Features' aria-label='Features'>
          <ul className='list'>
            <li>
              <PhoneGearIcon /> Mobile-first, fully responsive (phone, tablet, laptop)
            </li>
            <li>
              <PhoneGearIcon /> Calculator functionality.
            </li>
            <li>
              <PhoneGearIcon /> MUI components (input, snackbar, grids, paper), color palettes and
              typography.
            </li>
            <li>
              <PhoneGearIcon /> Customize MUI theme based on style guide.
            </li>
          </ul>
        </div>
      </>
    ),
  },
  webPlatform: {
    id: 4,
    title: 'Web Platform',
    category: 'Practice.Learn.Improve.',
    date: 'Aug 2023',
    technologies: ['React', 'MUI', 'JSS', 'Vite'],
    liveDemo: 'https://gunnar-miklis.github.io/intro-to-material-ui-react/',
    sourceCode: 'https://github.com/gunnar-miklis/intro-to-material-ui-react',
    imageSources: [webPlat],
    content: (
      <>
        <p>
          Part of my practice projects. Introduction into Material UI following the{' '}
          <ExternalLink
            href='https://www.youtube.com/playlist?list=PLDxCaNaYIuUlG5ZqoQzFE27CUOoQvOqnQ'
            title='MUI Series'
          />
          .
        </p>
        <div className='feature-list' title='Features' aria-label='Features'>
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
      </>
    ),
  },
  summaryComponent: {
    id: 5,
    title: 'Summary Component',
    category: 'Practice.Learn.Improve.',
    date: 'Jul 2023',
    technologies: ['HTML', 'CSS', 'React', 'Vite'],
    sourceCode:
      'https://github.com/gunnar-miklis/frontend-challenges/tree/main/summary-component/solutions',
    imageSources: [sumComp],
    content: (
      <p>
        Part of my practice projects. Re-create frontend designs provided by{' '}
        <ExternalLink href='https://www.frontendmentor.io' title='Frontend Mentor' />.
      </p>
    ),
  },
  qrCodeComponent: {
    id: 6,
    title: 'QR Code Component',
    category: 'Practice.Learn.Improve.',
    date: 'Jul 2023',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'React Native', 'Expo Go'],
    sourceCode:
      'https://github.com/gunnar-miklis/frontend-challenges/tree/main/qr-code-component/solutions',
    imageSources: [qrComp],
    content: (
      <>
        <p>
          Part of my practice projects. Re-create frontend designs provided by{' '}
          <ExternalLink href='https://www.frontendmentor.io' title='Frontend Mentor' />.
        </p>
        <div className='feature-list' title='Features' aria-label='Features'>
          Design this QR Code component in three different ways, using...
          <ul className='list'>
            <li>
              <LooksOneIcon /> HTML + CSS
            </li>
            <li>
              <LooksTwoIcon /> HTML + Bootstrap CSS
            </li>
            <li>
              <LooksThreeIcon /> React Native
            </li>
          </ul>
        </div>
      </>
    ),
  },
  waitThatLevelAgain: {
    id: 7,
    title: 'Wait...? That level, again?',
    category: 'Educational Project',
    date: 'Apr 2023',
    technologies: [
      'HMTL',
      'CSS',
      'JavaScript',
      'DOM',
      'Canvas / p5js',
      'Git / GitHub',
      'OOP',
      'KISS',
      'DRY',
      'YAGNI',
    ],
    liveDemo: 'https://gunnar-miklis.github.io/wait-that-level-again/',
    sourceCode: 'https://github.com/gunnar-miklis/wait-that-level-again',
    imageSources: [thatLevel],
    content: (
      <>
        <p>Navigate the tiny dancin&apos; potato to the exit. But wait? That level... again?</p>
        <p>
          This game was the final project for module 1, week 3. Develop a Browser Game using
          Frontend Technologies. Learn to use basic concepts.
        </p>
        <div className='feature-list' title='Features' aria-label='Features'>
          <ul className='list'>
            <li>
              <PhoneGearIcon /> Render a game in the browser.
            </li>
            <li>
              <PhoneGearIcon /> Have logic for winning and/or losing and show feedback to the player
              in either case.
            </li>
            <li>
              <PhoneGearIcon /> Use plain JavaScript for DOM manipulation (or HTML canvas for
              graphics).
            </li>
            <li>
              <PhoneGearIcon /> Have a repo on GitHub.
            </li>
            <li>
              <PhoneGearIcon /> Be deployed online using GitHub Pages so that anybody can play it.
            </li>
            <li>
              <PhoneGearIcon /> Stick with KISS, DRY, YAGNI principles.
            </li>
            <li>
              <PhoneGearIcon /> Make use of OOP paradigm.
            </li>
            <li>
              <PhoneGearIcon /> Present and demo your app during the Final Project presentations.
            </li>
          </ul>
        </div>
      </>
    ),
  },
  repCount: {
    id: 8,
    title: 'RepCount',
    category: 'Educational Project',
    date: 'Apr 2023',
    technologies: [
      'Node',
      'Express',
      'MongoDB',
      'Mongoose',
      'Handlebars',
      'CI',
      'Session Auth',
      'CRUD',
    ],
    liveDemo: 'https://workout-tracker-repcount.cyclic.app/',
    sourceCode: 'https://github.com/gunnar-miklis/workout-tracker',
    imageSources: [repCount],
    content: (
      <>
        <p>App for documenting your progress in the Gym.</p>
        <p>
          This Web Application was the final project for module 2, week 6. Collaborative Development
          of a Full-Stack Web Application that runs on a server. Introduction to Backend
          Technologies and collaborative Version Control (CI).
        </p>
        <div className='feature-list' title='Features' aria-label='Features'>
          <ul className='list'>
            <li>
              <PhoneGearIcon /> Use Express as a foundation.
            </li>
            <li>
              <PhoneGearIcon /> Use Mongoose for models and database communication.
            </li>
            <li>
              <PhoneGearIcon /> Have 2 models or more.
            </li>
            <li>
              <PhoneGearIcon /> Have validation on the models with feedback for users if their
              submission is invalid.
            </li>
            <li>
              <PhoneGearIcon /> Include sign up, log in & log out functionality with encrypted
              passwords and authorization.
            </li>
            <li>
              <PhoneGearIcon /> Implement all CRUD actions on models.
            </li>
            <li>
              <PhoneGearIcon /> Make use of OOP paradigm.
            </li>
            <li>
              <PhoneGearIcon /> Present and demo your app during the Final Project presentations.
            </li>
          </ul>
        </div>
      </>
    ),
  },
  sleepMinder: {
    id: 9,
    title: 'SleepMinder',
    category: 'Educational Project',
    date: 'May 2023',
    technologies: [
      'Node',
      'Express',
      'MongoDB',
      'Mongoose',
      'React',
      'Axios',
      'Chart.js',
      'JSON Web Token',
      'JWT Auth',
      'REST',
      'API',
    ],
    liveDemo: 'https://sleepminder.netlify.app/welcome',
    sourceCode: 'https://github.com/gunnar-miklis/app-sleepminder',
    imageSources: [sleepMinder],
    content: (
      <>
        <p>🏆 Winning Project, in the Hackshows final voting! 🏆</p>
        <p>
          This SPA Web Application was the final project for module 3, week 9. Develope a Full-Stack
          Web Application using the MERN stack. It&apos;s a cross-cohort collaboration of Data
          Analytics students, UX/UI Design students and Me (Web Development student).
        </p>
        <div className='feature-list' title='Features' aria-label='Features'>
          <ul className='list'>
            <li>
              <PhoneGearIcon /> Have a SPA frontend, built with React.
            </li>
            <li>
              <PhoneGearIcon /> Have a REST API backend built with ExpressJS, MongoDB and Mongoose.
            </li>
            <li>
              <PhoneGearIcon /> Have a REST API backend with routes that perform all CRUD actions.
            </li>
            <li>
              <PhoneGearIcon /> Include sign up, log in & log out functionality with encrypted
              passwords and authorization.
            </li>
            <li>
              <PhoneGearIcon /> Have two separate repos on GitHub. One repo is for your frontend
              React application and the other is for your backend REST API.
            </li>
            <li>
              <PhoneGearIcon /> Present and demo your app during the Final Project presentations.
            </li>
          </ul>
        </div>
      </>
    ),
  },
};
