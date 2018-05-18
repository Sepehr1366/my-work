document.addEventListener('DOMContentLoaded', function () {


    let Wrapp = document.getElementById('Wrapper');
    let toplayer = document.querySelector('.Top');
    let hand = document.querySelector('.Handel_it');
    let sk= 0;
    let delta = 0;
    if (Wrapp.className.indexOf('skew') != -1) {

    sk = 999;

    }
    Wrapp.addEventListener('mousemove', function (e) {

        delta = (e.clientX - window.innerWidth / 2) * 0.5;
        hand.style.left = e.clientX + delta + 'px';
        toplayer.style.width = e.clientX + sk + delta + 'px';
    })
})