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
            delay: (el, i) => 500 + 30 * i,
            complete: () => {document.querySelector('#title').innerHTML = document.querySelector('#title').innerText;}
        });
    }, 250);

    // Dark Mode
    var doc_classes = document.documentElement.classList
    var selected_mode = localStorage.getItem('mode')
    // prioritize user selected mode
    if (selected_mode == "dark") doc_classes.add('dark')

    if (!selected_mode){
        // follow system default
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            doc_classes.add('dark')
        }
        // on system mode change
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (e.matches) doc_classes.add('dark')
            else doc_classes.remove('dark')
        })
    }
    // on toggle mode
    document.querySelector("#toggle_mode").addEventListener('click', function() {
        if (doc_classes.contains('dark')){
            // turn to light
            doc_classes.remove('dark')
            localStorage.setItem('mode', "light")
        }
        else {
            // turn to dark
            doc_classes.add('dark')
            localStorage.setItem('mode', "dark")
        }
    })
};
