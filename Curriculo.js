var mobile = window.matchMedia("only screen and (max-width: 760px)");
if (mobile.matches) location.href = "https://goncalogoncalves33.github.io/Mobile/"

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange =function()
{
    if (this.readyState == 4 && this.status == 200)
    {
        var res =  JSON.parse(xhttp.responseText);

        var intro = res.vcard[0].intro;
        var ESAN = res.tabelaCV[0].ESAN;
        var carta = res.tabelaCV[1].carta;
        var ESTGA = res.tabelaCV[2].ESTGA

        document.getElementById("vcard-profile-description-text").innerHTML= "<p>"+ intro + "</p>";
        document.getElementById("ESAN").innerHTML= "<p>"+ ESAN + "</p>";
        document.getElementById("carta").innerHTML= "<p>"+ carta + "</p>";
        document.getElementById("ESTGA").innerHTML= "<p>"+ ESTGA + "</p>";
        

    }
}
xhttp.open("GET", "Curriculo.json", true); xhttp.send();


var app = document.getElementById('app');
var typewriter = new Typewriter(app, {loop: true, delay: 75,});

typewriter
  .pauseFor(700)
  .typeString('Programmer')
  .pauseFor(700)
  .deleteChars(10)
  .typeString('Debugger')
  .pauseFor(700)
  .deleteChars(10)
  .typeString('Web developer')
  .pauseFor(700)
  .start();




