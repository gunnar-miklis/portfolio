import { getAllTagsFromProjects } from '@data/filter';
import Chip from '@components/common/Chip';
import '@styles/components/tagslist.css';

export default function TagsList() {
  const allTags = getAllTagsFromProjects();
  return (
    <div className='tags-list' title='Tags' aria-label='Tags'>
      {allTags.map((tag) => (
        <Chip className='tags-list__chip' key={tag}>
          {tag}
        </Chip>
      ))}
    </div>
  );
}
