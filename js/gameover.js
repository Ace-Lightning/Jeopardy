window.onload = function() {
  var Team1_points = sessionStorage.getItem('Team1_points');
  var Team2_points = sessionStorage.getItem('Team2_points');
  if (Team1_points > Team2_points) {
    document.getElementById('winner').innerHTML = sessionStorage.getItem('Team1_name');
    document.getElementById('score').innerHTML = sessionStorage.getItem('Team1_points') + ' очков';
  }
  if (Team1_points < Team2_points) {
    document.getElementById('winner').innerHTML = sessionStorage.getItem('Team2_name');
    document.getElementById('score').innerHTML = sessionStorage.getItem('Team2_points') + ' очков';
  }
  if (Team1_points == Team2_points) {
    document.getElementById('win_container').innerHTML = "Победила дружба!";
  }
}