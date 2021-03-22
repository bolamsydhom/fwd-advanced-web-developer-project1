// to solve ReferenceError: regeneratorRuntime is not defined
// https://knowledge.udacity.com/questions/174638
import 'babel-polyfill'
require('regenerator-runtime');

describe('Server Test', () => {
    
    it('should test that true === true', () => {
        expect(true).toBe(true)
      })

})
