let scrol=0;
nav=document.getElementsByClassName(nav);
window.addEventListener("scroll",function(){
    var scrolltop=window.pageYoffset||this.document.documentElement.scrollTop;
    if(scrolltop>scrol){
        nav.style.top="-100px";
    }else{
        navbar.style.top="0"
    }
})
