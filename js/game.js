window.onload = function() {
  document.getElementById('Team1_name').innerHTML = sessionStorage.getItem('Team1_name');
  document.getElementById('Team2_name').innerHTML = sessionStorage.getItem('Team2_name');

  document.getElementById('Team1_points').innerHTML = sessionStorage.getItem('Team1_points');
  document.getElementById('Team2_points').innerHTML = sessionStorage.getItem('Team2_points');

  document.getElementById('task1_name').innerHTML = sessionStorage.getItem('task1_name');
  document.getElementById('task2_name').innerHTML = sessionStorage.getItem('task2_name');
  document.getElementById('task3_name').innerHTML = sessionStorage.getItem('task3_name');
  document.getElementById('task4_name').innerHTML = sessionStorage.getItem('task4_name');

  for (var i = 1; i < 5; i++) {
 		for (var j = 1; j < 5; j++) {
 			var test = sessionStorage.getItem('task_'+i+'_'+j);
 			var obj = document.getElementById('task_'+i+'_'+j);
 			if (test == "disabled") {
 				obj.style.visibility = "hidden";
 			}
 		}
  }


}

function task(row, column) {
  sessionStorage.setItem('TaskCurrent_row', row);
  sessionStorage.setItem('TaskCurrent_column', column);
}