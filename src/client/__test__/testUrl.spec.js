
import checkUrl from '../js/checkURL';
import 'babel-polyfill'
// require('regenerator-runtime');

describe('Test check url functionality', () => {
    test('Testing the checkUrl function defined or not', () => {
        expect(checkUrl).toBeDefined();
    })


    test('Testing the checkUrl function return true for valid url', () => {
        expect(checkUrl('https://www.abc123.com')).toBeTruthy();
    })
})
