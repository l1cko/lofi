function kafa() {
    var kafica = document.getElementById("kafica");
    kafica.classList.toggle("kafica2");
    var dim1 = document.getElementById("dim1");
    dim1.classList.toggle("dim12")
    var dim2 = document.getElementById("dim2");
    dim2.classList.toggle("dim22")
    var dim3 = document.getElementById("dim3");
    dim3.classList.toggle("dim32")
    var solja = document.querySelectorAll(".solja");
    solja[0].classList.toggle("solja2");
    solja[1].classList.toggle("solja2");
}

function fmeni() {
    var meni = document.getElementById("meni");
    meni.classList.toggle("meni2");
    var kvadrat = document.querySelector(".kvadrat");
    kvadrat.classList.toggle("kvadrat2")
    var slovo = document.querySelectorAll(".slovo");
    slovo[0].classList.toggle("slovo2")
    slovo[1].classList.toggle("slovo2")
    slovo[2].classList.toggle("slovo2")
    slovo[3].classList.toggle("slovo2")
    var cls = document.querySelectorAll(".cls-2");
    cls[0].classList.toggle("cls-22")
    cls[1].classList.toggle("cls-22")
    cls[2].classList.toggle("cls-22")
    cls[3].classList.toggle("cls-22")
    cls[4].classList.toggle("cls-22")
    cls[5].classList.toggle("cls-22")
}


var brojac = true;
var prvox = 0;
var prvoy = 0;
var s1 = false;
var s2 = false;
trougao = 1;
var poslednjiSkrol = 0;
var dalje = true;
var strana = document.getElementById("");

$(document).ready(function (event) {
    onmousemove = (event) => {
        if (brojac == true) {
            brojac = false;
            prvox = event.clientX / 60;
            prvoy = event.clientY / 60;
        }
        var x = event.clientX;
        var y = event.clientY;
        var nvr = parseInt(x / 60) - prvox;
        console.log(x, nvr);
        var nvr2 = parseInt(y / 60) - prvoy;
        var br = 0;
        document.getElementById("tekstovi").style.transform = "translate3d(" + nvr*1.2 + "px, 0px, 0px)";
        document.getElementById("strana2").style.transform = "translate3d(" + nvr / 1.5 + "px, " + nvr2 / 1.5 + "px, -2px)";
        document.getElementById("radio").style.transform = "translate3d(" + nvr / 1.5 + "px, 0px, 0px)";
    }

    var nzaa = document.getElementById("sadrzaj");

    nzaa.onscroll = function () {
        let elem = document.querySelector("#strana1");
        let rect = elem.getBoundingClientRect();


        if ((-1) * rect.top >= 0.3 * window.innerHeight) {
            
            if (dalje == true) 
            {

                dalje = false;
                $("#kafeBlur").animate({
                    opacity: (Math.pow((-1) * rect.top / (window.innerHeight /** 1.1*/), 2))
                }, 10);
                setTimeout(function () {
                    dalje = true;
                }, 10);

                console.log(Math.pow((-1) * rect.top / (window.innerHeight*1.1), 2));
            }
 
        }
        else {
            $("#kafeBlur").animate({
                opacity: 0
            }, 50);
            console.log("opt nula aaaaaaaaaa")
        }



        var skrol;
        var st = -1 * rect.top; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if (st > poslednjiSkrol) {
            skrol = false;
        } else if (st < poslednjiSkrol) {
            skrol = true;
        } // else was horizontal scroll
        poslednjiSkrol = st /*<= 0 ? 0 : st; // For Mobile or negative scrolling*/

        console.log(skrol);

        if ((-1) * rect.top >= 1.4 * window.innerHeight && trougao == 1 && skrol == false) {
            trougao = 2;
            $("#trougao").animate({
                height: "400%"
            }, 5000);
        }
        /*else if ( (-1) * rect.top < 1.2 * window.innerHeight && trougao == 0)
        {
            trougao = 1;
        }*/
        else if ((-1) * rect.top < 2.2 * window.innerHeight && trougao == 2 && skrol == true) {
            $("#trougao").stop();
            trougao = 1;
            $("#trougao").animate({
                height: "0%"
            }, 800);
        }

        var scrollTop = $(window).scrollTop();

        console.log((-1) * rect.top + " " + window.innerHeight);
        if ((-1) * rect.top <= 0.65 * window.innerHeight && s1 == true) {
            s1 = false;
            kafa();
        }
        else if ((-1) * rect.top > 0.65 * window.innerHeight && (-1) * rect.top < 2 * window.innerHeight) {
            document.getElementById("kafeBlur").style.opacity = Math.max(0, Math.min(1, rect.top / 400 + 2));
            if (s1 == false) {
                s1 = true;
                kafa();


            }
            if (s2 == true) {
                s2 = false;
                fmeni();
            }
        }
        else if ((-1) * rect.top >= 2 * window.innerHeight && (-1) * rect.top < 2.5 * window.innerHeight) {
            if (s1 == true && s2 == false) {
                s1 = false;
                s2 = true;

                kafa()
                fmeni();
            }

        }

    }

});








/*221006*/

/*int(nvr)*/


/*document.addEventListener('scroll', function(e) {

    let elem = document.querySelector("#strana1");
    let rect = elem.getBoundingClientRect();



    var scrollTop = $(window).scrollTop();

    console.log((-1) * rect.top + " " + window.innerHeight);
    if ((-1) * rect.top <= 0.65 * window.innerHeight && s1 == true) {
        s1 = false;
        kafa();
    }
    else if ((-1) * rect.top > 0.65 * window.innerHeight && (-1) * rect.top < 1.8 * window.innerHeight) {
        if (s1 == false) {
            s1 = true;
            kafa();
            /*document.getElementById("kafeBlur").style.opacity= 'url("slikaBlur.png")';
        }
        if (s2 == true) {
            s2 = false;
            fmeni();
        }
    }
    else if ((-1) * rect.top >= 1.8 * window.innerHeight && (-1) * rect.top < 2.5 * window.innerHeight) {
        if (s1 == true && s2 == false) {
            s1 = false;
            s2 = true;

            kafa()
            fmeni();
        }
    }
});*/