const Greet = require('./greet');

describe('Test Greet()', function (){
    it('should greet person', function () {
        expect(Greet('Elizabeth')).tobecalled('Hello Elizabeth');
    });
    it('should greet when name is omitted', () => {
        expect(Greet(null)).tobecalled('Hello there!');
    });
    it('should shout back', () => {
        expect(Greet('ELIZABETH')).tobecalled('Hello ELIZABETH!');
    });
    it('greet two persons',() => {
        expect(Greet(['James','Elizabeth'])).tobecalled('Hello, James, Elizabeth');
    });
    it('should greet mutiple persons', () => {
        expect(Greet(['Elizabeth', 'James', 'Harry'])).tobecalled('Hello, Elizabeth, James, Harry')
    });
});