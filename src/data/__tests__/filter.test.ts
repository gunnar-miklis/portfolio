import { describe, expect, expectTypeOf, it } from 'vitest';
import { getAllTagsFrom } from '@data/filter';
import type { Project } from '@data/projects';

describe('getAllTagsFrom()', () => {
  const testProjects: Project[] = [
    {
      id: 1,
      title: 'Project',
      description: 'Lorem ipsum',
      imageSources: [],
      tags: ['tag2', 'tag1'],
    },
    {
      id: 2,
      title: 'Project',
      description: 'Lorem ipsum',
      imageSources: [],
      tags: ['tag1', 'tag3', 'tag2'],
    },
  ];
  const result = getAllTagsFrom(testProjects);

  it('should remove duplicates and sort tags alphabetically', () => {
    expect(result).toEqual(['tag1', 'tag2', 'tag3']);
  });

  it('should return an array that is not empty', () => {
    expect(result).not.toEqual([]);
  });

  it('should return an array with a type of string[]', () => {
    expectTypeOf(result).toEqualTypeOf<string[]>();
  });
});
