function kaanna()
{
  var lang = document.getElementById('kieli').value;
  if(lang == 'englanti')
  {
    document.write("Hello world!");
  }
  else if(lang == 'ruotsi')
  {
    document.write("Hej världen!");
  }
  else {
    document.write("Hola Mundo!");
  }
}
