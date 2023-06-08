let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let img1 = document.getElementById('img1');
let img4 = document.getElementById('img4');
let img5 = document.getElementById('img5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    img4.style.left = value * -1.5 + 'px';
    img5.style.left = value * 1.5 + 'px';
});