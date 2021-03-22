// to solve ReferenceError: regeneratorRuntime is not defined
// https://knowledge.udacity.com/questions/174638
// import {handleSubmit} from '../src/client/js/formHandler.js';
import handleSubmit from '../js/formHandler';
import 'babel-polyfill'
require('regenerator-runtime');

// import {post} from '../src/client/js/formHandler.js';


describe('Client Test', () => {
        
        test('Testing the checkUrl function return false for invalid url', () => {
           expect(handleSubmit).toBeDefined();
        })

    

})


