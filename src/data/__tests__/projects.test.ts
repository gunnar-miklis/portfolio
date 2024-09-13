import { describe, expect, it } from 'vitest';
import { projects } from '@/data/projects';

describe('the projects data array', () => {
  it('should be not empty', () => {
    expect(projects.length).toBeTruthy();
  });
  it('should have unique ids', () => {
    const projectIds = projects.map(({ id }) => id);
    const uniqueProjectIds = [...new Set(projectIds)];

    expect(projectIds.length).toEqual(uniqueProjectIds.length);
  });
});
