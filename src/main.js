
import './style.css'
import $ from 'jquery';
// import Fun from './sub.js'


$(document)[0].write("hello webpack")
$("#app")[0].onclick = () => import('./sub').then(module => {

    module.aaa();
});
