import '@/styles/navbar.css';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='center-navbar'>
        <div className='brand'>
          <a href='https://flowcv.me/gunnar-miklis' target='_blank' rel='noreferrer' className='link'>
            Gunnar Miklis
          </a>
          <a href='https://github.com/gunnar-miklis' target='_blank' rel='noreferrer' className='link'>
            JavaScript Web Developer
          </a>
        </div>
        <div className='navigation'>
          <a href='#about' className='link'>
            About
          </a>
          <a href='#projects' className='link'>
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
}
