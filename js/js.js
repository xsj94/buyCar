/*fontAuto*/
function fontAuto(width){
    var winW=document.documentElement.clientWidth;
    if(winW>=width){
        document.documentElement.style.fontSize="625%";
    }
    else{
        document.documentElement.style.fontSize=(winW/width*625)+"%";
    }
}
fontAuto(750);
window.onresize=function(){
    fontAuto(750)
}
