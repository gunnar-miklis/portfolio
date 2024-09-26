import Chip from '@components/common/Chip/Chip';
import '@components/layout/tagslist.css';
import { projects } from '@/data/projects';
import { getAllTagsFrom } from '@data/filter';

export default function TagsList() {
  const allTags = getAllTagsFrom(projects);

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
