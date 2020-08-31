function Tili(tilinro, sukunimi, etunimi, saldo)
{
    this.nro = tilinro;
    this.sukunimi = sukunmi;
    this.enimi = etunimi;
    this.saldo = saldo;

    this.tiedot = naytatiedot;
}

var hannes = new Tili('123456-3443', 'Häyrynen', 'Hannes', 53);
var paivi = new Tili('123456-1212', 'Kuukka', 'Päivi', 12)

function naytatiedot()
{
  var tilinro = this.nro;
  var etunimi = this.etunimi;
  var sukunimi = this.sukunimi;
  var saldo = this.saldo;

  document.write("Henkilön tilinumero on: " + tilinro + " ja nimi on " + etunimi + "" + sukunimi + "." + " Ja hänen saldonsa on: " + saldo)
}
hannes.tiedot();
paivi.tiedot();

function talleta(summa)
{
  var saldo = this.saldo;
  var summa = summa;
  saldo += summa
  document.write("Uusi saldo on: " + saldo);
}


function otaRahaa(summa)
{
  var saldo = this.saldo;
  var summa = summa;
  if(summa <= saldo)
{
  saldo -= summa
}
else {
  document.write("Sinulla ei ole riittävästi rahaa tilillä");
}
  document.write("Uusi saldo on: " + saldo);
}
