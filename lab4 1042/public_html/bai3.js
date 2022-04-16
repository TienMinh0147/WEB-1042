var tg=new Date();
var kq="bay gio la:"+tg.getHours()+':'+tg.getMinutes()+':'+tg.getSeconds()+':'+tg.getDay("NGAY");
document.write(kq);
setTimeout(function() {
    location.reload();


document.write("hom nay la thu"+tg.getDay()+"/"+tg.getHours()+':'+tg.getMinutes()+':'+tg.getSeconds());
},1000);
