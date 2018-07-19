
import './assets/css/style.css'
import $ from 'jquery';
import _ from 'lodash';



$(document)[0].write("hello webpack112233")
document.getElementById('app').onclick = () => import('./sub').then(({aaa}) => {
    import('./a.js');
    aaa();
});
