var cuaso;
function mocs(){
    var height,width;
    if(isNaN(window.innerHeight)){
        width=screen.width-100;
        heighr=screen.height-100;
    }else{
        width=screen.width-150;
        heighr=screen.width-150;
        
    }
    cuaso=window.open('about:blank','cuaso','toolbar=yes,menubar=yes,width=+width+',height='+height');
    cuaso.window.ten=cuaso.prompt('Hay nhap ten cua ban');
    alert('xin chao');
}
function dongcs(){
    cuaso.window.close();
                                                                                    
}
function ktcs(){
    if(cuaso.window.close){
        alert('cua so da dong');
    }else{
        alert('cua so dang mo');
    }
}