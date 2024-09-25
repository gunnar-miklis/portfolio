import { describe, expect, expectTypeOf, it } from 'vitest';
import { headers, selectedVersion, getHeaderVersionFrom } from '@data/header';

describe('selectedVersion const variable', () => {
  it('should be a number that also exists in headers array as version number', () => {
    const headerVersions = headers.map(({ version }) => version);
    expect(headerVersions).toContain(selectedVersion);
  });
});

describe('getHeaderVersionFrom()', () => {
  const testHeaders = [
    { version: 1, hook: 'Hook 1', context: 'lorem ipsum', offer: 'lorem ipsum' },
    { version: 2, hook: 'Hook 2', context: 'lorem ipsum', offer: 'lorem ipsum' },
    { version: 3, hook: 'Hook 3', context: 'lorem ipsum', offer: 'lorem ipsum' },
  ];

  it('should return a single header object out of the given array', () => {
    const result = getHeaderVersionFrom(testHeaders, 1);

    expectTypeOf(result).not.toBeArray();
    expectTypeOf(result).toBeObject();
    expect(result).toEqual(testHeaders[0]);
  });

  it('should select the header that matches the given version', () => {
    const testVersion = 1;
    expect(getHeaderVersionFrom(testHeaders, testVersion).hook).toBe('Hook 1');
  });

  it('should return the latest header when the given version does not match', () => {
    const testVersion = 99;
    // @ts-expect-error - versions are dynamically inferred from the headers array. allowed versions are: 1 | 2 | 3
    expect(getHeaderVersionFrom(testHeaders, testVersion).hook).toBe('Hook 3');
  });
});
