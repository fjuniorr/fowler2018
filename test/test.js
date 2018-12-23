var st = require('../statement');
var fs = require('fs');
var assert = require('assert');

var invoice = JSON.parse(fs.readFileSync('invoices.json', 'utf8'));
var plays = JSON.parse(fs.readFileSync('plays.json', 'utf8'));

var expectedInvoice = `Statement for BigCo
    Hamlet: $650.00 (55 seats)
    As You Like It: $580.00 (35 seats)
    Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 75 credits\n`;

describe('Statement', function() {
    it('Invoice statement for BigCo', function() {
      assert.equal(st.statement(invoice[0], plays), expectedInvoice);
  });
});