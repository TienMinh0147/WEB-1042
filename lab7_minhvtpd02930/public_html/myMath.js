function  myMath(a, b, c){
    this.a=a;
    this.b=b;
    this.c=c;
    soLonNhatTrongBaSo=function (){
    max = a;
    if(max < b) 
    {
        max = b;
    }
 
    if(max < c) {
        max = c;
    }
 
        alert("So lon nhat la:" + max);
 
    return 0;
    };
}

