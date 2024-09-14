import { describe, expect, it } from 'vitest';
import { projects } from '@/data/projects';

describe('the projects data array', () => {
  it('should be not empty', () => {
    expect(projects.length).toBeTruthy();
  });
  it('should have unique ids', () => {
    const projectIds = projects.map(({ id }) => id);
    const duplicates = projectIds.filter((id, idx) => projectIds.indexOf(id) !== idx);

    expect(duplicates).toHaveLength(0);
  });
  it('should have valid categories', () => {
    const validCategories = [
      'Semi-Professional',
      'Educational Project',
      'Practice.Learn.Improve.',
      undefined,
    ];

    for (const { category } of projects) {
      expect(validCategories.includes(category)).toBe(true);
    }
  });
});
