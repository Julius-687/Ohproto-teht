function jarjesta()
{
  var yksi, kaksi, kolme;
  luku1 = parseInt(document.getElementById('eka').value);
  luku2 = parseInt(document.getElementById('toka').value);
  luku3 = parseInt(document.getElementById('kolmas').value);
  document.write("Annoit luvut: " + yksi + ' ' + kaksi + ' ' + kolme + "<br>");
  if(yksi < kaksi && yksi < kolme)
  {
    if(kaksi < kolme)
    {
      document.write("Lukujen järjestys: " + yksi + ' ' + kaksi + ' ' + kolme);
    }
    else {
      document.write("Lukujen järjestys: " + yksi + ' ' + kolme + ' ' + kaksi);
    }
  }
  else if(kaksi < yksi && kaksi < kolme)
  {
    if(yksi<kolme)
    {
      document.write("Lukujen järjestys: " + kaksi + ' ' + yksi + ' ' + kolme);
    }
    else {
      document.write("Lukujen järjestys: " + kaksi + ' ' + kolme + ' ' + yksi);

    }
  }
  else if(kolme < yksi && kolme < kaksi)
    {
      if(yksi < kaksi)
      {
        document.write("Lukujen järjestys: " + kolme + ' ' + yksi + ' ' + kaksi);
      }
      else {
        document.write("Lukujen järjestys: " + kolme + ' ' + kaksi + ' ' + yksi);

      }
    }
  }
function suurinLuku()
  {
    var l1, l2, l3, l4, l5, suurin;
    l1 = parseInt(document.getElementById('luku1').value);
    l2 = parseInt(document.getElementById('luku2').value);
    l3 = parseInt(document.getElementById('luku3').value);
    l4 = parseInt(document.getElementById('luku4').value);
    l5 = parseInt(document.getElementById('luku5').value);
    if(l1 < l2 && l3 < l2 && l4 < l2 && l5 < l2)
    {
      suurin = l2;
    }
    else if(l1 < l3 && l4 < l3 && l5 < l3)
    {
      suurin = l3;
    }
    else if(l1 < l4 && l5 < l4)
    {
      suurin = l4;
    }
    else if(l1 < l5)
    {
      suurin = l5;
    }
    else {
      suurin = l1;
    }
    document.write("Annoit luvut: " + l1 + ' ' + l2 + ' ' + l3 + ' ' + l4 + ' ' + l5);
    document.write("<br>Suurin niistä on: " + suurin);
  }
  function paritonParillinen()
  {
    var arvo;
    arvo = parseInt(document.getElementById('luku').value);
    document.write("Antamasi luku: " + arvo);
    if(arvo%2 == 0)
    {
      document.write("<br>Antamasi luku on parillinen");
    }
    else {
      document.write("<br>Antamasi luku on pariton");
    }
  }
  function ajoneuvo()
  {
    var age = parseInt(document.getElementById('ika').value);
    if(age < 16)
    {
      document.write("Voit ajaa polkupyörällä");
    }
    else if(age < 18)
    {
      document.write("Voit ajaa mopoa");
    }
    else {
      document.write("Voit ajaa autoa");
    }
  }
  function kaanna()
  {
    var lang = document.getElementById('kieli').value;
    if(lang == 'eng')
    {
      document.write("Hello world!");
    }
    else if(lang == 'swe')
    {
      document.write("Hej världen!");
    }
    else {
      document.write("Hola Mundo!");
    }
  }
