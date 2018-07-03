
import './assets/css/style.css'
import $ from 'jquery';
// import Fun from './sub.js'



$(document)[0].write("hello webpack112233")
document.getElementById('app').onclick = () => import('./sub').then(({aaa}) => {
    import('./a.js');
    aaa();
});
