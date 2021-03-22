import handleSubmit from './js/formHandler';
import checkUrl from './js/checkURL'
import './styles/style.scss'
import 'babel-polyfill'




// window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.btn-submit').addEventListener('click', (e)=>{
        e.preventDefault();
        console.log(e);
        handleSubmit();
    })
// })

export {
    checkUrl,
    handleSubmit
   }