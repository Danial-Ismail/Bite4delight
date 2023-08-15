const showmenu=(toggleId,navId)=>{
    const toggle=document.getElementById(toggleId);
    const nav=document.getElementById(navId);
    if(toggle&&nav){
        toggle.addEventListener("click",()=>{
            nav.classList.toggle("show-menu")
        })
    }
}
showmenu("nav-toggle","nav-menu");

const navlink=document.querySelectorAll(".nav_link");

function linkAction(){
    const navmenu=document.getElementById("nav-menu");
    navmenu.classList.remove("show-menu")

}
navlink.forEach(n=>n.addEventListener("click",linkAction))

function scrollHeader(){
    const nav=document.getElementById("header");
    if(this.scrollY>=200){
        nav.classList.add("scroll-header")
    }else{
        nav.classList.remove("scroll-header");
    }
}
window.addEventListener("scroll",scrollHeader)

function scrolltop(){
    const scrolltop=document.getElementById("scroll-top");
    if(this.scrollY>=560){
        scrolltop.classList.add("scroll-top")
    }else{
        scrolltop.classList.remove("scroll-top");
    }
}
window.addEventListener("scroll",scrolltop)


const themeButton=document.getElementById("theme-button");
const darkTheme="dark-theme";
const icontheme="bx-sun"
const selectedtheme=localStorage.getItem("selected-theme");
const selectedicon=localStorage.getItem("selected-icon");

const getcurrenttheme=()=>document.body.classList.contains(darkTheme)?"dark":"light"
const getcurrenticon=()=>themeButton.classList.contains(icontheme)?"bx-moon":"bx-sun"

if(selectedtheme){
    document.body.classList[selectedtheme==="dark"?"add":"remove"](darkTheme);
    themeButton.classList[selectedicon==="bx-moon"?"add":"remove"](icontheme); 
}


themeButton.addEventListener("click",()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(icontheme);

    localStorage.setItem("selected-theme",getcurrenttheme())
    localStorage.setItem("selected-icon",getcurrenticon())
})

const sr=ScrollReveal({
    origin:"top",
    distance:"30px",
    duration:2000,
    reset:true
});

sr.reveal(".home_data,.home_img,.about_data,.about_img,.services_content,.menu_content,.app_data,.app_img,.contact_data,.contact_button,.footer_content",{
    interval:200
})