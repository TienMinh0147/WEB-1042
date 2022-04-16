function f(){
    var min=prompt("nhap min","0");
      var max=prompt("nhap max","100");
      var check=false;
      var count=0;
      var ran=min+Math.floor(Math.random()*max);
       
      while (check=false&& count<3){
           var number=prompt("Hay doan xem so bao nhieu:");  
           if(ran==number){
               check=true;
               alert("ban da nhap dung");
           }else if(ran<number){
               count++;
               alert("So ban doan lon hon");
               
           }else{
               count++;
               alert("So ban doan nho hon");
           }
      }
      
    alert("so chuong trinh sinh ra la:"+ran);  
}