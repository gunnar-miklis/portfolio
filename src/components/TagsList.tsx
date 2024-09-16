import { getAllTagsFromProjects } from '@data/filter';
import Chip from '@components/common/Chip';
import styles from '@styles/components/tagslist.module.css';

export default function TagsList() {
  const allTags = getAllTagsFromProjects();
  return (
    <div className={styles['tags-list']} title='Tags' aria-label='Tags'>
      {allTags.map((tag) => (
        <Chip className={styles['chip']} key={tag}>{tag}</Chip>
      ))}
    </div>
  );
}
