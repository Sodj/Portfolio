// document.addEventListener('DOMContentLoaded', e=>{
document.onreadystatechange = function () {
    if (document.readyState != "complete") return;

    setTimeout(() => {
        document.querySelector(".gate1").classList.add('open');
        document.querySelector(".gate2").classList.add('open');
        document.querySelector(".loading").style.display = 'none';
        // Text animation
        var textWrapper = document.querySelector('#title');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
        anime.timeline({ loop: false }).add({
            targets: '#title .letter',
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: (el, i) => 500 + 30 * i
        });
    }, 250);
};
