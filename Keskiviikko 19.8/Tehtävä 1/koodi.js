function jarjestaluvut()
{
  var eka, toka, kolmas;
  eka = parseInt(document.getElementById("numero1").value);
  toka = parseInt(document.getElementById("numero2").value);
  kolmas = parseInt(document.getElementById("numero3").value);
  document.write("Annoit luvut: " + eka + " " + toka + " " + kolmas + "<br>");
  if(eka < toka && eka < kolmas)
  {
    if(toka < kolmas)
    {
      document.write("Lukujen järjestys: " + eka + " " + toka + " " + kolmas);
    }
    else {
      document.write("Lukujen järjestys: " + eka + " " + kolmas + " " + toka);
    }
  }
  else if(toka < eka && toka < kolmas)
  {
    if(eka < kolmas)
    {
      document.write("Lukujen järjestys: " + toka + " " + eka + " " + kolmas);
    }
    else {
      document.write("Lukujen järjestys: " + toka + " " + kolmas + " " + eka);

    }
  }
  else if(kolmas < eka && kolmas < toka)
    {
      if(eka < toka)
      {
        document.write("Lukujen järjestys: " + kolmas + " " + eka + " " + toka);
      }
      else {
        document.write("Lukujen järjestys: " + kolmas + " " + toka + " " + eka);
      }
    }
  }
