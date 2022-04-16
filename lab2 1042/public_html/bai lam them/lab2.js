function giaipt() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    if (a == 0) {
        if (b == 0)
            if (c == 0)
                alert("Phương Trình Vô Số Nghiệm !!!");
            else
                alert("Phương Trình Vô Nghiệm !!!");
        else {
            x = -c / b;
            alert("Phương Trình Có Nghiệm Là : " + x);
        }
    } else {
        delta = (b * b) - (4 * a * c);
        if (delta < 0)
            alert("Phương Trình Vô Nghiệm !!!")
        else if (delta == 0) {
            x = -b / (2 * a);
            alertr("Phương Trình Có Nghiệm Là : " + x);
        } else {
            x1 = (-b + Math.sqrt(delta)) / (2 * a);
            x2 = (-b - Math.sqrt(delta)) / (2 * a);
            alert("x1 = " + x1 + "\nx2 = " + x2);
        }
    }
}