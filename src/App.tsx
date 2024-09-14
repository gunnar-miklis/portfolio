import { projects } from '@/data/projects';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Terminal from '@/components/Terminal';
import GalleryWithHorizontalScroll from '@/components/gallery/GalleryWithHorizontalScroll';
import Footer from '@/components/Footer';
import TagsList from '@/components/TagsList';

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id='about'>
          <Header />
          <Terminal />
          <TagsList />
        </section>

        <section id='projects'>
          <h1 id='projects-title' style={{ marginBottom: '1rem' }}>
            Projects
          </h1>
          <GalleryWithHorizontalScroll projects={projects} />
        </section>
      </main>

      <Footer />
    </>
  );
}
