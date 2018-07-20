
import './assets/css/style.css'
import $ from 'jquery';
import _ from 'lodash';


console.log(_.clone());
$(document)[0].write("hello66 webpack66");
document.getElementById('app').onclick = () => import('./sub').then(({aaa}) => {
    import('./a.js');
    aaa();
});


console.log(fenghao);
