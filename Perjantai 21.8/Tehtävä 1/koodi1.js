function tarkastaLuku()
{
  var tarkastettava = document.getElementById('luku').value;
  if(tarkastettava >= 0)
  {
    document.getElementById('vastaus').innerHTML = "Luku on positiivinen";
  }
  else {
    document.getElementById('vastaus').innerHTML = "Luku on negatiivinen";
  }
}
