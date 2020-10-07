function ajoneuvo()
{
  var age = parseInt(document.getElementById('kayttajanIka').value);
  if(age < 16)
  {
    document.write("Saat ajaa polkupyörällä");
  }
  else if(age < 18)
  {
    document.write("Saat ajaa mopolla");
  }
  else {
    document.write("Saat ajaa autolla");
  }
}
