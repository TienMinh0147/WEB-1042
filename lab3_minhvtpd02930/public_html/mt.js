var a;
var dau;

function f(n) {
    var s = document.getElementById("kq").value + n;
    document.getElementById("kq").value = s;
}
function fsign(sign) {
    //+,-,*,/
    a = eval(document.getElementById("kq").value);
    dau = sign;
    document.getElementById("kq").value = "";

}
function fbang() {
    b = eval(document.getElementById("kq").value);
    switch (dau) {
        case"+":
            c = a + b;
            break;
        case"-":
            c = a + b;
            break;
        case"x":
            c = a + b;
            break;
        case":":
            c = a + b;
            break;

    }
    document.getElementById("kq").value=c+"";
}