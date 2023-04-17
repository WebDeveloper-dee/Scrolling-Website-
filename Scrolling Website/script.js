let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    bird1.style.left = value * 1.5 + 'px';
    bird2.style.left = value * -1.5 + 'px';
});
