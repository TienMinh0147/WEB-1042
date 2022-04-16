 var hoa = new Object();
            hoa.urlHoaNo = 'images/hoano.jpg';
            hoa.urlHeNu = 'images/hoahenu.jpg';
            
            hoa.nohoa = function () {
                document.write("<img src='" + this.urlHoaNo + "' />");
            }
            
            hoa.henu = function () {
                document.write("<img src='" + this.urlHeNu + "'  />");
            }