let html = document.querySelector('#html');
let css = document.querySelector('#css');
let js = document.querySelector('#js');
let iframe = document.querySelector('#iframe').contentWindow.document;

// iframe.body.style.backgroundColor = 'yellow';
// iframe.body.style.color = 'white';

document.onkeypress = function(){
    console.log(document.querySelector('#html-text').value);
    let html = document.querySelector('#html-text').value;
    let css = document.querySelector('#css-text').value;
    let js = document.querySelector('#js-text').value;
    iframe.body.innerHTML = `
    ${html} <script>${js}</script>
    `;
    iframe.head.innerHTML = `
    <style>${css} </style>
    `;
}