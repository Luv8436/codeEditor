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
let btn = document.querySelectorAll('.btn');
for(let i=0;i<btn.length;i++){
    btn[i].onclick = function(event){
        
        let elem = event.target.innerText.toLowerCase();
        let all = document.querySelectorAll(`.${elem}`);
        for(let j=0;j<all.length;j++){
            console.log(all[i]);
            if(all[j].style.display === 'none'){
                all[j].style.display = '';
                event.target.style.backgroundColor = 'rgb(218, 209, 209)';
            }else{
                all[j].style.display = 'none';
                event.target.style.backgroundColor = 'rgb(243, 221, 165)';
            }
        }
    }
}
