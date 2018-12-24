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

var expectedHtmlInvoice = `<h1>Statement for BigCo</h1>
<table>
<tr><th>play</th><th>seats</th><th>cost</th></tr>    <tr><td>Hamlet</td><td>55</td><td>$650.00</td></tr>
    <tr><td>As You Like It</td><td>35</td><td>$580.00</td></tr>
    <tr><td>Othello</td><td>40</td><td>$500.00</td></tr>
</table>
<p>Amount owed is <em>$1,730.00</em></p>
<p>You earned <em>75</em> credits</p>\n`

describe('Statement', function() {
    it('Invoice statement for BigCo', function() {
      assert.equal(st.statement(invoice[0], plays), expectedInvoice);
  });
    it('HTML Invoice statement for BigCo', function() {
      assert.equal(st.htmlStatement(invoice[0], plays), expectedHtmlInvoice);
  });
});
