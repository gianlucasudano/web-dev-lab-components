import { describe, expect, it } from 'vitest';

import { getCleanUpClasses } from './helpers';

describe('helpers', () => {
  it('returns a valid string', () => {
    const classes = ['', 'foo_bar_xnz', undefined, ' ', 'foo'];
    expect(getCleanUpClasses(classes)).toStrictEqual('foo_bar_xnz foo');
  });
});
