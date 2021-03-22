import 'babel-polyfill'

var validUrl = require('valid-url');
const checkUrl =  (url)=>{
  
    if (validUrl.isUri(url)){
        return true;
    } else {
        return false
    }
}
export default checkUrl;