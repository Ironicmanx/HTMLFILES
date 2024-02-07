

document.addEventListener('DOMContentLoaded', function () {
    var diceElement = document.getElementById('dice');
    var diceImageElement = document.getElementById('diceImage');
    var outputElement = document.getElementById('output');
  
    diceElement.addEventListener('click', function () {
      // Arvotaan satunnaisluku välillä 1-6
      var randomNumber = Math.floor(Math.random() * 6) + 1;
  
      // Päivitetään nopan kuva
      if(randomNumber > 3) {
        diceImageElement.src = 'https://th.bing.com/th/id/OIP.TE0Bypgs15fgVu1oLBVnIQHaEH?w=310&h=180&c=7&r=0&o=5&pid=1.7';
      } else {
        diceImageElement.src = 'https://th.bing.com/th/id/OIP.QzgzDoKOcHhV075KCTjQDQHaEs?w=283&h=180&c=7&r=0&o=5&pid=1.7';  // Lisää uusi polku haluamallesi kuvalle
      }
      // Päivitetään näytettävä numero
      outputElement.textContent = 'Arvottu numero: ' + randomNumber;
    });
  });
  