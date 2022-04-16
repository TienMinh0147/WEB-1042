   function Meo(trongluong){
                this.trongluong= trongluong;
                this.batChuot=function (chuot){
                    this.trongluong+=chuot.trongluong;
                };
            }
                function Chuot(trongluong){
                    this.trongluong=trongluong;
                    
                }
                var conmeo=new Meo(2000);
                var conchuot1 = new Chuot(200);
                 var conchuot2 = new Chuot(300);
                  var conchuot3 = new Chuot(400);
                conmeo.batChuot(conchuot1);
                conmeo.batChuot(conchuot2);
                conmeo.batChuot(conchuot3)  ;
                document.write("con meo nang:"+conmeo.trongluong+"g");
            