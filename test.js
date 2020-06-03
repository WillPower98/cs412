
const {expect} = require('chai');

const {filter} = require ('./PS1/PS1.P1');
const {evaluate} = require('./PS1/PS1.P2');

const{functionA, lambda1, lambda2, countA} = require('./PS1/PS1.P3');

const text =  'supercalifragilisticexpialidocious';

describe ('making sure problem 1 works', () => {

    it('it should return abc for cba123456789', function() {
        let sequence = filter('cba123456789');
        expect(sequence).to.be.equal('abc');
    });

    it('it should return abc for 123456789abc', function() {
        let sequence = filter('123456789abc');
        expect(sequence).to.be.equal('abc');
    });

    it('it should return eilouv for i,love,u.', function() {
        let sequence = filter('i,love,u.');
        expect(sequence).to.be.equal('eilouv');
    });
})

describe ('making sure problem 2 works', () => {

    it('it should return 7 for 3 + 4', function() {
        let num = evaluate('3+4');
        expect(num).to.be.equal('7');
    });

    it('it should return 30 for 5 x 6', function() {
        let num = evaluate('5*6');
        expect(num).to.be.equal('30');
    });

    it('it should return 3 for 9 / 3', function() {
        let num = evaluate('9/3');
        expect(num).to.be.equal('3');
    });
})

describe ('making sure problem 3 works', () => {

    it('it should return [‘super’, ‘califrAgilisti’, ‘cexpialido’, ‘cious’] for supercalifragilisticexpialidocious', function() {
        let result = functionA(lambda1, text);
        expect(result).to.be.eql(['super','califragilisti','cexpialido','cious']);
    });

    it('it should return supercAlifrAgilisticexpiAlidocious for supercalifragilisticexpialidocious', function() {
        let result = functionA(lambda2, text);
        expect(result).to.be.equal('supercAlifrAgilisticexpiAlidocious');
    });

    it('it should return 3 for supercAlifrAgilisticexpiAlidocious', function() {
        let result = countA('supercAlifrAgilisticexpiAlidocious');
        expect(result).to.be.equal(3);
    });
})