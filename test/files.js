'use strict';

const assert = require('assert');
const files = require('../lib/files');

describe('Files', () => {
  describe('.notSubDirectory(subDirs)', () => {
    it('returns true when the directory is not subdirectory', () => {
      const notSubDirectory = files.notSubDirectory(['./fixtures', './fixtures/nested']);
      assert.strictEqual(notSubDirectory('./fixtures/custom'), true);
    });

    it('returns false when the directory is a subdirectory', () => {
      const isSubDirectory = files.notSubDirectory(['./fixtures', './fixtures/nested']);
      assert.strictEqual(isSubDirectory('./fixtures/nested'), false);
    });
  });
});
