function doiLich(){
    var nam=prompt("moi ban nhap nam muoi tim kiem");
    var can=nam%10;
    var chi=nam%12;
    
        switch (can){
            case 0:
                can="canh";
                break;
        }
        switch (chi){
            case 2:
                chi="Tuat";
                break;
        }
        alert("Nam am lich"+can+""+chi);
    }
    
    