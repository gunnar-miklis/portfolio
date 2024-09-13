import { type ReactNode } from 'react';
import PhoneGearIcon from '@mui/icons-material/PhonelinkSetup';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import LooksThreeIcon from '@mui/icons-material/Looks3';
import ExternalLink from '@/components/common/ExternalLink';

import ticketing from '@/assets/ticketing.webp';
import portfolio from '@/assets/portfolio.webp';
import todo from '@/assets/todo-list.webp';
import tipCalc from '@/assets/tip-calculator.webp';
import webPlat from '@/assets/web-platform.webp';
import sumComp from '@/assets/summary-comp.webp';
import qrComp from '@/assets/qr-code-comp.webp';
import thatLevel from '@/assets/that-level-again.webp';
import repCount from '@/assets/repcount.webp';
import sleepMinder from '@/assets/sleepminder.webp';
import tsLearning from '@/assets/ts-learning-path.webp';

export type Project = {
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
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Event Ticketing',
    category: 'Latest Project',
    date: 'May 2024',
    technologies: [
      'Frontend',
      'TypeScript',
      'SQLite',
      'ReactNative',
      'ExpoGo',
      'ExpoCamera',
      'Axios',
    ],
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
  {
    id: 2,
    title: 'Portfolio - Gunnar Miklis',
    date: 'Jun 2024',
    technologies: [
      'Frontend',
      'Accessibility',
      'CI/CD',
      'TypeScript',
      'React',
      'Vite',
      'Lighthouse',
    ],
    liveDemo: 'https://gunnar-miklis.netlify.app/',
    sourceCode: 'https://github.com/gunnar-miklis/portfolio',
    imageSources: [portfolio],
    content: (
      <>
        <>
          <p>
            Discover a user-centric approach and explore a blend of frontend and backend skills
            coupled with a unique personality. Expertise in TypeScript, Node.js, Next.js, React, and
            more. Emphasizing high software quality including maintainability, scalability,
            security, and usability.
          </p>
          <div className='feature-list' title='Features' aria-label='Features'>
            <ul className='list'>
              <li>
                <PhoneGearIcon /> Accessibility optimzation. Semantics, ARIA, Lighthouse.
              </li>
              <li>
                <PhoneGearIcon /> Scroll events and animations. Typewriter.
              </li>
              <li>
                <PhoneGearIcon /> Custom components: Horizontal scrollable gallery. Progress
                indicator.
              </li>
            </ul>
          </div>
        </>
      </>
    ),
  },
  {
    id: 3,
    title: 'Todo List',
    date: 'Sep 2023',
    technologies: [
      'Fullstack',
      'CSR',
      'SPA',
      'REST',
      'CI/CD',
      'JavaScript',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'React',
      'Vite',
      'Axios',
    ],
    liveDemo: 'https://main--restful-api-web-app.netlify.app/',
    sourceCode: 'https://github.com/gunnar-miklis/restful-api-web-app',
    imageSources: [todo],
    footnote: '*This App was part of an application process.',
    content: (
      <p>
        Develop a RESTful API Full-Stack Web Application using MERN-Stack (MongoDB, Express, React,
        Node.js) and JavaScript as main language, in less than 48-hours.
      </p>
    ),
  },
  {
    id: 4,
    title: 'Tip Calculator',
    category: 'Practice.Learn.Improve.',
    date: 'Aug 2023',
    technologies: ['Frontend', 'CI/CD', 'JavaScript', 'React', 'Vite', 'MaterialUI', 'JSS'],
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
  {
    id: 5,
    title: 'Web Platform',
    category: 'Practice.Learn.Improve.',
    date: 'Aug 2023',
    technologies: ['Frontend', 'JavaScript', 'React', 'Vite', 'MaterialUI', 'JSS', 'GitHubPages'],
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
  {
    id: 6,
    title: 'Summary Component',
    category: 'Practice.Learn.Improve.',
    date: 'Jul 2023',
    technologies: ['Frontend', 'HTML', 'CSS', 'React', 'Vite'],
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
  {
    id: 7,
    title: 'QR Code Component',
    category: 'Practice.Learn.Improve.',
    date: 'Jul 2023',
    technologies: ['Frontend', 'HTML', 'CSS', 'Bootstrap', 'ReactNative', 'ExpoGo'],
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
  {
    id: 8,
    title: 'Wait...? That level, again?',
    category: 'Educational Project',
    date: 'Apr 2023',
    technologies: [
      'Frontend',
      'DRY',
      'KISS',
      'OOP',
      'HMTL',
      'CSS',
      'JavaScript',
      'DOM',
      'Canvas/p5js',
      'Git',
      'GitHub',
      'GitHubPages',
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
  {
    id: 9,
    title: 'RepCount',
    category: 'Educational Project',
    date: 'Apr 2023',
    technologies: [
      'Backend',
      'SSR',
      'CRUD',
      'CI',
      'JavaScript',
      'Node.js',
      'Express',
      'Handlebars',
      'MongoDB',
      'Mongoose',
      'Cookies/Session',
      'Authentication',
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
  {
    id: 10,
    title: 'SleepMinder',
    category: 'Educational Project',
    date: 'May 2023',
    technologies: [
      'Fullstack',
      'CSR',
      'SPA',
      'REST',
      'CI/CD',
      'JavaScript',
      'Node.js',
      'React',
      'Axios',
      'Chart.js',
      'Express',
      'JSONWebToken',
      'Authentication',
      'MongoDB',
      'Mongoose',
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
  {
    id: 11,
    title: 'Coding Challenges',
    category: 'Practice.Learn.Improve.',
    technologies: ['Coding', 'JavaScript', 'RegEx'],
    sourceCode: 'https://github.com/gunnar-miklis/coding-challenges',
    imageSources: [
      'https://raw.githubusercontent.com/codewars/branding/master/light-text-logo-vertical.png',
    ],
    content: (
      <>
        <p>
          Part of my practice projects. Complete coding challenges provided by{' '}
          <ExternalLink href='https://www.codewars.com/' title='Codewars' />.
        </p>
        <div className='feature-list' title='Features' aria-label='Features'>
          <ul className='list'>
            <li>
              <PhoneGearIcon /> Fundamentals.
            </li>
            <li>
              <PhoneGearIcon /> Strings and regular expressions.
            </li>
            <li>
              <PhoneGearIcon /> Data Structures, array methods, lists, sorting.
            </li>
            <li>
              <PhoneGearIcon /> Logic puzzles, algorithms.
            </li>
            <li>
              <PhoneGearIcon /> Performance optimized code.
            </li>
            <li>
              <PhoneGearIcon /> Edge cases.
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 12,
    title: 'TypeScript Learning Path',
    category: 'Practice.Learn.Improve.',
    technologies: ['Coding', 'TypeScript'],
    sourceCode: 'https://github.com/gunnar-miklis/learn-typescript/tree/main/ms-learning-path',
    imageSources: [tsLearning],
    content: (
      <>
        <p>
          Part of my practice projects. &quot;Learning Path: Build JavaScript applications using
          TypeScript&quot; provided by{' '}
          <ExternalLink
            href='https://learn.microsoft.com/en-us/training/paths/build-javascript-applications-typescript/'
            title='Microsoft'
          />
          .
        </p>
        <div className='feature-list' title='Features' aria-label='Features'>
          <ul className='list'>
            <li>
              <PhoneGearIcon /> Conditionals.
            </li>
            <li>
              <PhoneGearIcon /> Functions.
            </li>
            <li>
              <PhoneGearIcon /> Scope.
            </li>
            <li>
              <PhoneGearIcon /> Arrays.
            </li>
            <li>
              <PhoneGearIcon /> Loops.
            </li>
            <li>
              <PhoneGearIcon /> Iterators.
            </li>
            <li>
              <PhoneGearIcon /> Objects.
            </li>
            <li>
              <PhoneGearIcon /> Classes.
            </li>
            <li>
              <PhoneGearIcon /> Modules.
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 13,
    title: 'Journey to WebDev',
    category: 'Practice.Learn.Improve.',
    date: '2024',
    technologies: [
      'Frontend',
      'Backend',
      'Fullstack',
      'SPA',
      'MVC',
      'ODM',
      'CRUD',
      'REST',
      'CORS',
      'Authentication',
      'ErrorHandling',
      'HTML',
      'CSS',
      'JavaScript',
      'DOM',
      'Node.js',
      'React',
      'Axios',
      'JsonServer',
      'Express',
      'BcryptJS',
      'JsonWebToken',
      'MongoDB',
      'Nodemailer',
      'Cloudinary',
      'RegEx',
    ],
    imageSources: ['https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png'],
    sourceCode: 'https://github.com/gunnar-miklis/recap',
    content: (
      <>
        <p>
          A look back at the journey of becoming a web developer. With personal notes to summarize
          certain concepts, step-by-step instructions to document certain approaches, as well as
          comments as reminders of how things been done. Simply a personalized review that I can
          return to when a little refresher is needed.
        </p>
        <div className='feature-list' title='Features' aria-label='Features'>
          <p>JS FUNDAMENTALS</p>
          <ul className='list'>
            <li>
              <PhoneGearIcon /> JS coding concepts, nodeJS.
            </li>
            <li>
              <PhoneGearIcon /> HTML, CSS, DOM.
            </li>
          </ul>
        </div>
        <div className='feature-list' title='Features' aria-label='Features'>
          <p>BACKEND</p>
          <ul className='list'>
            <li>
              <PhoneGearIcon /> MVC, Response-Request-Cylce.
            </li>
            <li>
              <PhoneGearIcon /> REST, API, CRUD, ExpressJS.
            </li>
            <li>
              <PhoneGearIcon /> DB, ODM, MongoDB.
            </li>
            <li>
              <PhoneGearIcon /> CORS, security, password encryption, bcryptJS.
            </li>
            <li>
              <PhoneGearIcon /> Nodemailer, Json-Server.
            </li>
          </ul>
        </div>
        <div className='feature-list' title='Features' aria-label='Features'>
          <p>FRONTEND</p>
          <ul className='list'>
            <li>
              <PhoneGearIcon /> Axios, fetch external API.
            </li>
            <li>
              <PhoneGearIcon /> SPA rendering, component-based architecture.
            </li>
            <li>
              <PhoneGearIcon /> React: component lifecycle: state, side-effects, hooks.
            </li>
            <li>
              <PhoneGearIcon /> React: flow of information: props/callbacks (pass down/lift up).
            </li>
            <li>
              <PhoneGearIcon /> React: routing, navigation.
            </li>
            <li>
              <PhoneGearIcon /> React: context (theme, language, auth).
            </li>
          </ul>
        </div>
        <div className='feature-list' title='Features' aria-label='Features'>
          <p>FULLSTACK</p>
          <ul className='list'>
            <li>
              <PhoneGearIcon /> Token-based Authentication: authentication - verification -
              authorization, public/private/protected routes, login/signup input data validation,
              user feedback (success/error) messages, handle token expiration, error handling.
            </li>
            <li>
              <PhoneGearIcon /> File-Upload via Cloudinary: multipart/form-data.
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 14,
    title: 'Curious for more?',
    technologies: ['GitHub'],
    imageSources: ['https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png'],
    content: (
      <p>
        Explore more projects on my{' '}
        <ExternalLink href='https://github.com/gunnar-miklis' title='GitHub' /> profile.
      </p>
    ),
  },
];
