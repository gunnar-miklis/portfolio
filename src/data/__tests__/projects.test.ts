import { describe, expect, it } from 'vitest';
import { type ProjectCategories, projects } from '@data/projects';

describe('the projects data array', () => {
  it('should not be empty', () => {
    expect(projects).not.toEqual([]);
  });

  it('should have unique ids', () => {
    const projectIds = projects.map(({ id }) => id);
    const duplicates = projectIds.filter((id, idx) => projectIds.indexOf(id) !== idx);
    expect(duplicates).toHaveLength(0);
  });

  it('should have ids in a specific format: "240801" (YY/MM/ProjectNr), except 0-9', () => {
    const projectIds = projects.map(({ id }) => id);
    const validYears = ['23', '24'];
    const validMonth = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

    for (const id of projectIds) {
      // skip 0-9, because those are "special" projects, don't include in the sorting logic.
      if (id < 10) continue;

      // check that the id is a number with 6 digits. And the year is bigger than 2023.
      expect(id).toBeGreaterThan(230000);

      const year = id.toString().slice(0, 2);
      const month = id.toString().slice(2, 4);
      const projectNumber = Number(id.toString().slice(4, 8));

      expect(validYears.includes(year)).toBe(true);
      expect(validMonth.includes(month)).toBe(true);
      expect(projectNumber).toBeGreaterThan(0);
      expect(projectNumber).toBeLessThanOrEqual(99);
    }
  });

  it('should have valid categories', () => {
    const validCategories = [
      'Semi-Professional',
      'Educational Project',
      'Practice.Learn.Improve.',
    ] satisfies ProjectCategories[];

    for (const { category } of projects) {
      // the category property is optional, so "undefined" is a valid option, too
      if (category === undefined) continue;
      expect(validCategories).toContain(category);
    }
  });
});
