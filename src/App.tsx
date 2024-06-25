import Terminal from './components/Terminal';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { projects } from './utils/projects';
import HorizontalScrollGallery from './components/HorizontalScrollGallery';

export default function App() {
  return (
    <>
      <Navbar />

      <Header />
      <Terminal />

      <section id='projects' style={{ width: '100%' }}>
        <h1 style={{ marginTop: 100, marginBottom: '1rem' }}>Projects</h1>
        <HorizontalScrollGallery projects={projects} />
      </section>

      {/* TESTING: start styleguide */}
      {/* <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='window paper'>
        <div
          className='paper-spacing-lg gap-md'
          style={{ display: 'flex', flexDirection: 'column' }}
        >
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
      </div> */}
      {/* TESTING: end styleguide */}
    </>
  );
}
