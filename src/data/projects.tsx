import type { ReactNode } from 'react';
import PhoneGearIcon from '@mui/icons-material/PhonelinkSetup';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import LooksThreeIcon from '@mui/icons-material/Looks3';

import Paper from '@components/common/Paper/Paper';
import ExternalLink from '@components/common/ExternalLink/ExternalLink';

import ticketing from '@assets/ticketing.webp';
import portfolio from '@assets/portfolio.webp';
import tipCalc from '@assets/tip-calculator.webp';
import webPlat from '@assets/web-platform.webp';
import sumComp from '@assets/summary-comp.webp';
import qrComp from '@assets/qr-code-comp.webp';
import thatLevel from '@assets/that-level-again.webp';
import repCount from '@assets/repcount.webp';
import sleepMinder from '@assets/sleepminder.webp';
import tsLearning from '@assets/ts-learning-path.webp';

export type Project = {
  id: number;
  title: string;
  description: ReactNode;
  tags: string[];
  imageSources: string[];
  category?: ProjectCategories;
  date?: string;
  features?: ReactNode;
  liveDemo?: string;
  sourceCode?: string;
  footnote?: string;
};
export type ProjectCategories = 'Semi-Professional' | 'Educational' | 'Practice.Learn.Improve.';
export type ProjectTags = (typeof unsortedProjects)[number]['tags'][number];

const unsortedProjects = [
  {
    id: 240902,
    title: 'Filter Coffee',
    category: 'Practice.Learn.Improve.',
    date: 'Sep 2024',
    tags: [
      'Frontend',
      'TypeScript',
      'React',
      'Vite',
      'BEM',
      'SOLID',
      'MVVM',
      'Separation of Concerns',
      'GitHub Pages',
    ],
    sourceCode: 'https://github.com/gunnar-miklis/multi-filtering',
    liveDemo: 'https://gunnar-miklis.github.io/multi-filtering',
    imageSources: [
      'https://res.cloudinary.com/dyrcsywk9/image/upload/v1726687050/multi-filtering-tablet.webp',
    ],
    description: (
      <>
        <p>
          This small application lets users filter a dataset of fictional (AI-generated) coffees
          based on various criteria.
        </p>

        <p>
          Part of my practice projects. The main goals are: Get familiar with advance filtering
          techniques, handle multiple filters effectively, update the URL (search params). Enhance
          my knowledge in React (state management, custom hooks, separation of concerns, MVVM),
          TypeScript (handle more complex types) and CSS (learn and follow BEM methodology for clean
          and reusable styles).
        </p>
      </>
    ),
    features: (
      <Paper className='paper--list' paperSpacing='sm' title='Features' aria-label='Features'>
        <ul className='list'>
          <li className='list__item'>
            <PhoneGearIcon /> Dynamically Filtering: Use multiple filters to filter a dataset by
            different categories.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Filter Status Managment: See which filters are &quot;available&quot;
            and which are currently &quot;active&quot;.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Interactive Filter Selection: Click to move filters between
            &quot;available&quot; and &quot;active&quot; lists.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Adaptive Remaining Filters: Available filters show only those options
            that the user can still choose from.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> URL Sync: Active filters are reflected in the browser URL. Simply
            share the current filter combination, or paste a URL to revisit a specific set of
            filters.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Reset Filters: Clear all active filters and reset the URL to start
            over.
          </li>
        </ul>
      </Paper>
    ),
  },
  {
    id: 241001,
    title: 'Playlist Editor (for Spotify)',
    category: 'Semi-Professional',
    date: 'Oct 2024',
    tags: [
      'Full-Stack',
      'Frontend',
      'TypeScript',
      'Next.js',
      'Next-Auth',
      'Spotify Web API',
      'Authentication',
      'OAuth',
    ],
    sourceCode: 'https://github.com/gunnar-miklis/spotify-playlist-editor',
    liveDemo: 'https://playlist-editor-for-spotify.vercel.app',
    imageSources: [
      'https://res.cloudinary.com/dyrcsywk9/image/upload/v1729355211/playlist-editor-for-spotify-laptop.webp',
    ],
    description: (
      <p>
        Playlist Editor (for Spotify) is a simple tool to edit and manage playlists, utilizing the
        Spotify API. Users can filter, sort, randomize track order and create new playlists. The
        interface offers a light and a dark theme, and offers responsiveness across devices.
        It&apos;s currently under development. A prototype is available.
      </p>
    ),
    features: (
      <Paper className='paper--list' paperSpacing='sm' title='Features' aria-label='Features'>
        <ul className='list'>
          <li className='list__item'>
            <PhoneGearIcon /> Fetch user specific playlists from the Spotify API.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Filter playlists based on selected criteria.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Sort playlists based on selected criteria.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Randomize the playlists track order.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> new playlists for the users account, after applying refinements.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Light/Dark mode. Responsive Layout.
          </li>
        </ul>
      </Paper>
    ),
  },
  {
    id: 240801,
    title: 'Introduction to Next.js',
    category: 'Educational',
    date: 'Aug 2024',
    tags: [
      'Full-Stack',
      'SSR',
      'TypeScript',
      'Next.js',
      'Next-Auth',
      'PostgreSQL',
      'Prisma',
      'ZOD',
      'Authentication',
      'OAuth',
      'ORM',
    ],
    sourceCode: 'https://github.com/gunnar-miklis/cim-next-db',
    liveDemo: 'https://cim-next-db.vercel.app',
    imageSources: [
      'https://res.cloudinary.com/dyrcsywk9/image/upload/v1725998093/cim-next-db-home-phone.webp',
    ],
    description: (
      <p>
        Learn how to use Next.js as Full-Stack SSR/CSR Application. Integrate a relational SQL
        Database and an OAuth Authentication.
      </p>
    ),
    features: (
      <>
        <Paper className='paper--list' paperSpacing='sm' title='Features' aria-label='Features'>
          <p>NEXT.JS</p>
          <ul className='list'>
            <li className='list__item'>
              <PhoneGearIcon /> Create client and server components.
            </li>
            <li className='list__item'>
              <PhoneGearIcon /> Handle form submit in Next.js via: useFormState() + useFormStatus()
              to control the &quot;pending-status&quot; and &quot;response-messages&quot; on the
              client-side.
            </li>
            <li className='list__item'>
              <PhoneGearIcon /> Use Next.js Server Actions for CRUD operations. Read and write data
              from the database via Prisma ORM on the server-side.
            </li>
            <li className='list__item'>
              <PhoneGearIcon /> Validate form data against a Zod schema.
            </li>
          </ul>
        </Paper>

        <Paper className='paper--list' paperSpacing='sm' title='Features' aria-label='Features'>
          <p>DATABASE</p>
          <ul className='list'>
            <li className='list__item'>
              <PhoneGearIcon /> Create a Prisma ORM schema and connect to the Vercel PostgreSQL
              Database.
            </li>
            <li className='list__item'>
              <PhoneGearIcon /> Add various SQL relations: one-to-one, one-to-many, many-to-many.
            </li>
            <li className='list__item'>
              <PhoneGearIcon /> Query the database via Prisma ORM and &quot;populate&quot; relations
              during querying.
            </li>
            <li className='list__item'>
              <PhoneGearIcon /> Integrate a simple pagination mechanism to read the database.
            </li>
          </ul>
        </Paper>

        <Paper className='paper--list' paperSpacing='sm' title='Features' aria-label='Features'>
          <p>AUTHENTICATION</p>
          <ul className='list'>
            <li className='list__item'>
              <PhoneGearIcon /> Authenticate a user via GitHub OAuth procedure.
            </li>
            <li className='list__item'>
              <PhoneGearIcon /> Lock certain features based on the session/login status.
            </li>
          </ul>
        </Paper>
      </>
    ),
  },
  {
    id: 240501,
    title: 'Event Ticketing',
    category: 'Semi-Professional',
    date: 'May 2024',
    tags: ['Frontend', 'TypeScript', 'SQLite', 'React Native', 'Expo Go', 'Expo Camera', 'Axios'],
    sourceCode: 'https://github.com/gunnar-miklis#ticketing-app-',
    imageSources: [ticketing],
    footnote:
      '*The App isn&apos;t public yet. However, Version 1.0.0 already got tested recently during a music festival.',
    description: (
      <p>
        For the validation of event tickets at the door check-in. Can either scan &quot;QR-Code
        tickets&quot; or check-in &quot;Box Office tickets&quot;. Intentionally built for offline
        use, because the current venue has poor internet coverage.
      </p>
    ),
    features: (
      <Paper className='paper--list' paperSpacing='sm' title='Features' aria-label='Features'>
        <ul className='list'>
          <li className='list__item'>
            <PhoneGearIcon /> QR-Code Scanner/Camera.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Offline storage (app works without internet).
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Manage two ticket types: qr-code & box office.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Download, update, search or filter a list of tickets.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Statistics for: total sales & daily checkins.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Counter for recent checkins.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Light/Dark theme.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Switch Languages.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Always keep screen awake.
          </li>
        </ul>
      </Paper>
    ),
  },
  {
    id: 240601,
    title: 'Portfolio - Gunnar Miklis',
    category: 'Semi-Professional',
    date: 'Jun 2024',
    tags: [
      'Frontend',
      'Accessibility',
      'CI/CD',
      'Unit Testing',
      'TypeScript',
      'React',
      'Vite',
      'Vitest',
      'Lighthouse',
      'BEM',
      'CSS Modules',
    ],
    liveDemo: 'https://gunnar-miklis.netlify.app/',
    sourceCode: 'https://github.com/gunnar-miklis/portfolio',
    imageSources: [portfolio],
    description: (
      <p>
        Discover a user-centric approach and explore a blend of frontend and backend skills coupled
        with a unique personality. Expertise in TypeScript, Node.js, Next.js, React, and more.
        Emphasizing high software quality including maintainability, scalability, security, and
        usability.
      </p>
    ),
    features: (
      <Paper className='paper--list' paperSpacing='sm' title='Features' aria-label='Features'>
        <ul className='list'>
          <li className='list__item'>
            <PhoneGearIcon /> Accessibility optimzation. Semantics, ARIA, Lighthouse.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Scroll events and animations. Typewriter.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Custom components: Horizontal scrollable gallery. Progress indicator.
          </li>
        </ul>
      </Paper>
    ),
  },
  {
    id: 230802,
    title: 'Tip Calculator',
    category: 'Practice.Learn.Improve.',
    date: 'Aug 2023',
    tags: ['Frontend', 'CI/CD', 'JavaScript', 'React', 'Vite', 'Material UI', 'JSS'],
    liveDemo: 'https://main--tip-calculator-57d393.netlify.app/',
    sourceCode:
      'https://github.com/gunnar-miklis/frontend-challenges/tree/main/tip-calculator/solutions/react-mui',
    imageSources: [tipCalc],
    description: (
      <p>
        Part of my practice projects. Re-create frontend designs provided by{' '}
        <ExternalLink href='https://www.frontendmentor.io' title='Frontend Mentor' />.
      </p>
    ),
    features: (
      <Paper className='paper--list' paperSpacing='sm' title='Features' aria-label='Features'>
        <ul className='list'>
          <li className='list__item'>
            <PhoneGearIcon /> Mobile-first, fully responsive (phone, tablet, laptop)
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Calculator functionality.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> MUI components (input, snackbar, grids, paper), color palettes and
            typography.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Customize MUI theme based on style guide.
          </li>
        </ul>
      </Paper>
    ),
  },
  {
    id: 230801,
    title: 'Web Platform',
    category: 'Practice.Learn.Improve.',
    date: 'Aug 2023',
    tags: ['Frontend', 'JavaScript', 'React', 'Vite', 'Material UI', 'JSS', 'GitHub Pages'],
    liveDemo: 'https://gunnar-miklis.github.io/intro-to-material-ui-react/',
    sourceCode: 'https://github.com/gunnar-miklis/intro-to-material-ui-react',
    imageSources: [webPlat],
    description: (
      <p>
        Part of my practice projects. Introduction into Material UI following the{' '}
        <ExternalLink
          href='https://www.youtube.com/playlist?list=PLDxCaNaYIuUlG5ZqoQzFE27CUOoQvOqnQ'
          title='MUI Series'
        />
        .
      </p>
    ),
    features: (
      <Paper className='paper--list' paperSpacing='sm' title='Features' aria-label='Features'>
        <ul className='list'>
          <li className='list__item'>
            <PhoneGearIcon /> Grid Layout, Navbar and Routing, Header, Notification, Tooltips.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Modal, Form Input, Form Validation, Searchbar, Filter Function.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Dynamic Data Table, Pagination, Page Size.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Progress Stepper, Conditional Next/Back/Finish/Reset Functionality.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Loading Skeleton.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Snackbar/Alert Functionality.
          </li>
        </ul>
      </Paper>
    ),
  },
  {
    id: 230602,
    title: 'Summary Component',
    category: 'Practice.Learn.Improve.',
    date: 'Jul 2023',
    tags: ['Frontend', 'HTML', 'CSS', 'React', 'Vite'],
    sourceCode:
      'https://github.com/gunnar-miklis/frontend-challenges/tree/main/summary-component/solutions',
    imageSources: [sumComp],
    description: (
      <p>
        Part of my practice projects. Re-create frontend designs provided by{' '}
        <ExternalLink href='https://www.frontendmentor.io' title='Frontend Mentor' />.
      </p>
    ),
  },
  {
    id: 230601,
    title: 'QR Code Component',
    category: 'Practice.Learn.Improve.',
    date: 'Jul 2023',
    tags: ['Frontend', 'HTML', 'CSS', 'React Native', 'Expo Go'],
    sourceCode:
      'https://github.com/gunnar-miklis/frontend-challenges/tree/main/qr-code-component/solutions',
    imageSources: [qrComp],
    description: (
      <p>
        Part of my practice projects. Re-create frontend designs provided by{' '}
        <ExternalLink href='https://www.frontendmentor.io' title='Frontend Mentor' />.
      </p>
    ),
    features: (
      <Paper className='paper--list' paperSpacing='sm' title='Features' aria-label='Features'>
        Design this QR Code component in three different ways, using...
        <ul className='list'>
          <li className='list__item'>
            <LooksOneIcon /> HTML + CSS
          </li>
          <li className='list__item'>
            <LooksTwoIcon /> HTML + Bootstrap CSS
          </li>
          <li className='list__item'>
            <LooksThreeIcon /> React Native
          </li>
        </ul>
      </Paper>
    ),
  },
  {
    id: 230401,
    title: 'Wait...? That level, again?',
    category: 'Educational',
    date: 'Apr 2023',
    tags: [
      'Frontend',
      'DRY',
      'KISS',
      'OOP',
      'HTML',
      'CSS',
      'JavaScript',
      'DOM',
      'Canvas / p5.js',
      'Git',
      'GitHub',
      'GitHub Pages',
    ],
    liveDemo: 'https://gunnar-miklis.github.io/wait-that-level-again/',
    sourceCode: 'https://github.com/gunnar-miklis/wait-that-level-again',
    imageSources: [thatLevel],
    description: (
      <>
        <p>Navigate the tiny dancin&apos; potato to the exit. But wait? That level... again?</p>

        <p>
          This game was the final project for module 1, week 3. Develop a Browser Game using
          Frontend Technologies. Learn to use basic concepts.
        </p>
      </>
    ),
    features: (
      <Paper className='paper--list' paperSpacing='sm' title='Features' aria-label='Features'>
        <ul className='list'>
          <li className='list__item'>
            <PhoneGearIcon /> Render a game in the browser.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Have logic for winning and/or losing and show feedback to the player
            in either case.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Use plain JavaScript for DOM manipulation (or HTML canvas for
            graphics).
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Have a repo on GitHub.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Be deployed online using GitHub Pages so that anybody can play it.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Stick with KISS, DRY, YAGNI principles.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Make use of OOP paradigm.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Present and demo your app during the Final Project presentations.
          </li>
        </ul>
      </Paper>
    ),
  },
  {
    id: 230402,
    title: 'RepCount',
    category: 'Educational',
    date: 'Apr 2023',
    tags: [
      'Backend',
      'SSR',
      'Templating',
      'CRUD',
      'CI/CD',
      'JavaScript',
      'Node.js',
      'Express',
      'Handlebars.js',
      'MongoDB',
      'Mongoose',
      'ORM',
      'Session',
      'Cookies',
      'Authentication',
    ],
    liveDemo: 'https://workout-tracker-repcount.cyclic.app/',
    sourceCode: 'https://github.com/gunnar-miklis/workout-tracker',
    imageSources: [repCount],
    description: (
      <>
        <p>App for documenting your progress in the Gym.</p>

        <p>
          This Web Application was the final project for module 2, week 6. Collaborative Development
          of a Full-Stack Web Application that runs on a server. Introduction to Backend
          Technologies and collaborative Version Control (CI).
        </p>
      </>
    ),
    features: (
      <Paper className='paper--list' paperSpacing='sm' title='Features' aria-label='Features'>
        <ul className='list'>
          <li className='list__item'>
            <PhoneGearIcon /> Use Express as a foundation.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Use Mongoose for models and database communication.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Have 2 models or more.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Have validation on the models with feedback for users if their
            submission is invalid.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Include sign up, log in & log out functionality with encrypted
            passwords and authorization.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Implement all CRUD actions on models.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Make use of OOP paradigm.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Present and demo your app during the Final Project presentations.
          </li>
        </ul>
      </Paper>
    ),
  },
  {
    id: 230501,
    title: 'SleepMinder',
    category: 'Educational',
    date: 'May 2023',
    tags: [
      'Full-Stack',
      'SPA',
      'REST',
      'CI/CD',
      'JavaScript',
      'Node.js',
      'React',
      'Axios',
      'Chart.js',
      'Express',
      'Json Web Token',
      'Authentication',
      'MongoDB',
      'Mongoose',
      'ORM',
    ],
    liveDemo: 'https://sleepminder.netlify.app/welcome',
    sourceCode: 'https://github.com/gunnar-miklis/app-sleepminder',
    imageSources: [sleepMinder],
    description: (
      <>
        <p>🏆 Winning project in a Hackshow competition. 🏆</p>

        <p>
          This SPA Web Application was the final project for module 3, week 9. Develope a Full-Stack
          Web Application using the MERN stack. It&apos;s a cross-cohort collaboration of Data
          Analytics students, UX/UI Design students and Me (Web Development student).
        </p>
      </>
    ),
    features: (
      <Paper className='paper--list' paperSpacing='sm' title='Features' aria-label='Features'>
        <ul className='list'>
          <li className='list__item'>
            <PhoneGearIcon /> Have a SPA frontend, built with React.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Have a REST API backend built with ExpressJS, MongoDB and Mongoose.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Have a REST API backend with routes that perform all CRUD actions.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Include sign up, log in & log out functionality with encrypted
            passwords and authorization.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Have two separate repos on GitHub. One repo is for your frontend React
            application and the other is for your backend REST API.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Present and demo your app during the Final Project presentations.
          </li>
        </ul>
      </Paper>
    ),
  },
  {
    id: 2,
    title: 'Coding Challenges',
    category: 'Practice.Learn.Improve.',
    tags: ['JavaScript', 'RegEx'],
    sourceCode: 'https://github.com/gunnar-miklis/coding-challenges',
    imageSources: [
      'https://raw.githubusercontent.com/codewars/branding/master/light-text-logo-vertical.png',
    ],
    description: (
      <p>
        Part of my practice projects. Complete coding challenges provided by{' '}
        <ExternalLink href='https://www.codewars.com/' title='Codewars' />.
      </p>
    ),
    features: (
      <Paper className='paper--list' paperSpacing='sm' title='Features' aria-label='Features'>
        <ul className='list'>
          <li className='list__item'>
            <PhoneGearIcon /> Fundamentals.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Strings and regular expressions.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Data Structures, array methods, lists, sorting.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Logic puzzles, algorithms.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Performance optimized code.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Edge cases.
          </li>
        </ul>
      </Paper>
    ),
  },
  {
    id: 3,
    title: 'TypeScript Learning Path',
    category: 'Practice.Learn.Improve.',
    tags: ['TypeScript'],
    sourceCode: 'https://github.com/gunnar-miklis/learn-typescript/tree/main/ms-learning-path',
    imageSources: [tsLearning],
    description: (
      <p>
        Part of my practice projects. &quot;Learning Path: Build JavaScript applications using
        TypeScript&quot; provided by{' '}
        <ExternalLink
          href='https://learn.microsoft.com/en-us/training/paths/build-javascript-applications-typescript/'
          title='Microsoft'
        />
        .
      </p>
    ),
    features: (
      <Paper className='paper--list' paperSpacing='sm' title='Features' aria-label='Features'>
        <ul className='list'>
          <li className='list__item'>
            <PhoneGearIcon /> Conditionals.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Functions.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Scope.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Arrays.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Loops.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Iterators.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Objects.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Classes.
          </li>
          <li className='list__item'>
            <PhoneGearIcon /> Modules.
          </li>
        </ul>
      </Paper>
    ),
  },
  {
    id: 1,
    title: 'Journey to WebDev',
    category: 'Practice.Learn.Improve.',
    date: '2024',
    tags: [
      'Frontend',
      'Backend',
      'Full-Stack',
      'SPA',
      'MVC',
      'ODM',
      'CRUD',
      'REST',
      'CORS',
      'Authentication',
      'Error Handling',
      'HTML',
      'CSS',
      'JavaScript',
      'DOM',
      'Node.js',
      'React',
      'Axios',
      'JsonServer',
      'Express',
      'Bcrypt.js',
      'Json Web Token',
      'MongoDB',
      'Nodemailer',
      'Cloudinary',
      'RegEx',
    ],
    imageSources: ['https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png'],
    sourceCode: 'https://github.com/gunnar-miklis/recap',
    description: (
      <p>
        A look back at the journey of becoming a web developer. With personal notes to summarize
        certain concepts, step-by-step instructions to document certain approaches, as well as
        comments as reminders of how things been done. Simply a personalized review that I can
        return to when a little refresher is needed.
      </p>
    ),
    features: (
      <>
        <Paper className='paper--list' paperSpacing='sm' title='Features' aria-label='Features'>
          <p>JS FUNDAMENTALS</p>
          <ul className='list'>
            <li className='list__item'>
              <PhoneGearIcon /> JS coding concepts, nodeJS.
            </li>
            <li className='list__item'>
              <PhoneGearIcon /> HTML, CSS, DOM.
            </li>
          </ul>
        </Paper>

        <Paper className='paper--list' paperSpacing='sm' title='Features' aria-label='Features'>
          <p>BACKEND</p>
          <ul className='list'>
            <li className='list__item'>
              <PhoneGearIcon /> MVC, Response-Request-Cylce.
            </li>
            <li className='list__item'>
              <PhoneGearIcon /> REST, API, CRUD, ExpressJS.
            </li>
            <li className='list__item'>
              <PhoneGearIcon /> DB, ODM, MongoDB.
            </li>
            <li className='list__item'>
              <PhoneGearIcon /> CORS, security, password encryption, bcryptJS.
            </li>
            <li className='list__item'>
              <PhoneGearIcon /> Nodemailer, Json-Server.
            </li>
          </ul>
        </Paper>

        <Paper className='paper--list' paperSpacing='sm' title='Features' aria-label='Features'>
          <p>FRONTEND</p>
          <ul className='list'>
            <li className='list__item'>
              <PhoneGearIcon /> Axios, fetch external API.
            </li>
            <li className='list__item'>
              <PhoneGearIcon /> SPA rendering, component-based architecture.
            </li>
            <li className='list__item'>
              <PhoneGearIcon /> React: component lifecycle: state, side-effects, hooks.
            </li>
            <li className='list__item'>
              <PhoneGearIcon /> React: flow of information: props/callbacks (pass down/lift up).
            </li>
            <li className='list__item'>
              <PhoneGearIcon /> React: routing, navigation.
            </li>
            <li className='list__item'>
              <PhoneGearIcon /> React: context (theme, language, auth).
            </li>
          </ul>
        </Paper>

        <Paper className='paper--list' paperSpacing='sm' title='Features' aria-label='Features'>
          <p>FULLSTACK</p>
          <ul className='list'>
            <li className='list__item'>
              <PhoneGearIcon /> Token-based Authentication: authentication - verification -
              authorization, public/private/protected routes, login/signup input data validation,
              user feedback (success/error) messages, handle token expiration, error handling.
            </li>
            <li className='list__item'>
              <PhoneGearIcon /> File-Upload via Cloudinary: multipart/form-data.
            </li>
          </ul>
        </Paper>
      </>
    ),
  },
  {
    id: 0,
    title: 'Curious for more?',
    tags: ['GitHub'],
    imageSources: ['https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png'],
    description: (
      <p>
        Explore more projects on my{' '}
        <ExternalLink href='https://github.com/gunnar-miklis' title='GitHub' /> profile.
      </p>
    ),
  },
] as const satisfies Project[];

export const projects: Project[] = unsortedProjects.toSorted((a, b) => b.id - a.id);
