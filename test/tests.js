import headsTails from '../src/heads-tails.js';

const test = QUnit.test;    

test('returns heads when random number is less than 0.5', function(assert) {
    const num = 0.4;
    const expected = 'Heads';
    const result = headsTails(num);
    assert.equal(result, expected);
});