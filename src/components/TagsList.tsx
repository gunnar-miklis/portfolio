import { getAllTagsFromProjects } from '@/data/filter';
import '@/styles/gallery/projects-filter.css';

export default function TagsList() {
  const allTags = getAllTagsFromProjects();
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'var(--space-sm)',
      }}
      title='Tags'
      aria-label='Tags'
    >
      {allTags.map((tag) => (
        <span
          className='chip'
          key={tag}
          style={{
            backgroundColor: 'light-dark(var(--card-bg-light), var(--card-bg-dark))',
          }}
        >
          <p style={{ textAlign: 'center' }}>{tag}</p>
        </span>
      ))}
    </div>
  );
}
