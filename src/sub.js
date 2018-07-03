import $ from 'jquery';

function aaa() {
    $("#app")[0].onclick = () =>  {
        console.log('sub')
    };
};

function bbb() {
    alert("bbb")
}

export {aaa, bbb}