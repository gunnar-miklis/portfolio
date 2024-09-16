import { projects } from '@data/projects';
import Navbar from '@components/Navbar';
import Header from '@components/Header';
import Terminal from '@components/Terminal';
import GalleryWithHorizontalScroll from '@components/gallery/GalleryWithHorizontalScroll';
import Footer from '@components/Footer';
import TagsList from '@components/TagsList';
import '@styles/app.css';

export default function App() {
  return (
    <>
      <Navbar />

      <main className='main'>
        <section className='section section--about' id='about'>
          <Header />
          <Terminal />
        </section>

        <section className='section' id='projects'>
          <h1 className='heading-1 section__title' id='projects-title'>
            Projects
          </h1>
          <GalleryWithHorizontalScroll projects={projects} />
        </section>

        <section className='section' id='tags'>
          <TagsList />
        </section>
      </main>

      <Footer />
    </>
  );
}
