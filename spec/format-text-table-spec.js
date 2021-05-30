var ftt = require('../lib/format-text-table');

describe('format-text-table', function() {
  describe('formatTable()', function() {
    it('should format a table made out of pipes', function() {
      src = `
      column1| column2|  column3
      1|hello|world
      2|foo|bar
      `
      expected = `
      column1 | column2 | column3
      1       | hello   | world
      2       | foo     | bar
      `
      expect(ftt.formatTable(src)).toEqual(expected);
    });
    it('should correctly pad the beginning of the table', function() {
      src = `
           column1| column2|  column3
        foo|bar|1
      `

    });
  });
});