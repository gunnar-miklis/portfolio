import '@/styles/header.css';

export default function Header() {
  return (
    <header className='header'>
      {/* TODO: idea, animate the text typewriter style */}
      <div className='header-text'>
        <h1>Building apps with user-centered approach unlocks potential.</h1>
        <h2>
          I believe intuitive, continually evolving products that are both functional and enjoyable
          will deeply resonate with users and transform their experience.
        </h2>
      </div>
      <div className='header-image'>
        <img src='https://flowcv.me/gunnar-miklis/photo-sdqu8bojavdg.jpg' />
      </div>
    </header>
  );
}
