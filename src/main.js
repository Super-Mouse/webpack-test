
import './assets/css/style.css'
import $ from 'jquery';
import _ from 'lodash';


console.log(_.clone());
$(document)[0].write("hello webpack");
$('#app')[0].onmouseup = () => import('./sub').then(({aaa}) => {
    import('./a.js');
    aaa();
});


console.log(SuperMouse);
