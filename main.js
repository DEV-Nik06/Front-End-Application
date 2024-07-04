
let btn = document.getElementById('mobile-cta');
let nav = document.querySelector('nav');
let exitBtn = document.getElementById('mobile-exit');
btn.addEventListener('click' , (e)=>{
            nav.classList.add('menu-btn');
})
exitBtn.addEventListener('click' , (e)=>{
            nav.classList.remove('menu-btn');
})


var icon = document.getElementById('icon');

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        icon.src = "images/dark theme icon/sun.png";
    }
    else{
        icon.src = "images/dark theme icon/moon.png";
    }
}
