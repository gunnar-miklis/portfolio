import { getAllTagsFromProjects } from '@data/filter';
import '@styles/gallery/projects-filter.css';
import Chip from '@components/common/Chip';

export default function TagsList() {
  const allTags = getAllTagsFromProjects();
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 'var(--space-sm)',
      }}
      title='Tags'
      aria-label='Tags'
    >
      {allTags.map((tag) => (
        <Chip key={tag}>{tag}</Chip>
      ))}
    </div>
  );
}
