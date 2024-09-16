import '@styles/app.css';
import Navbar from '@/components/layout/Navbar';
import Header from '@/components/layout/Header';
import Terminal from '@/components/layout/Terminal';
import GalleryWithHorizontalScroll from '@components/gallery/GalleryWithHorizontalScroll';
import Footer from '@/components/layout/Footer';
import TagsList from '@/components/layout/TagsList';
import { projects } from '@data/projects';

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
