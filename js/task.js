window.onload = function() {
    document.getElementById('Team1').innerHTML = sessionStorage.getItem('Team1_name');
    document.getElementById('Team2').innerHTML = sessionStorage.getItem('Team2_name');
    var CurRow = sessionStorage.getItem('TaskCurrent_row');
    var CurCol = sessionStorage.getItem('TaskCurrent_column');
    var TitleTask = sessionStorage.getItem('task' + CurRow + '_name');
    var PriceTask = 0;
    switch (CurCol) {
  		case '1':
    	PriceTask = 100;
    	break;
    	case '2':
    	PriceTask = 200;
    	break;
    	case '3':
    	PriceTask = 300;
    	break;
    	case '4':
    	PriceTask = 500;
    	break;
	}
    document.getElementById('title').innerHTML = TitleTask + ' за "' + PriceTask + '"';
}

function win(team) {
	var CurRow = sessionStorage.getItem('TaskCurrent_row');
	var CurCol = sessionStorage.getItem('TaskCurrent_column');
	var PriceTask = 0;
    switch (CurCol) {
  		case '1':
    		PriceTask = 100;
    		break;
    	case '2':
    		PriceTask = 200;
    		break;
    	case '3':
    		PriceTask = 300;
    		break;
    	case '4':
    		PriceTask = 500;
    		break;
	}

	var Team1_points = sessionStorage.getItem('Team1_points');
	var Team2_points = sessionStorage.getItem('Team2_points');
	switch (team) {
		case 'Team1':
			Team1_points = +Team1_points + +PriceTask;
			sessionStorage.setItem('Team1_points', Team1_points);
			break;
		case 'Team2':
			Team2_points = +Team2_points + +PriceTask;
			sessionStorage.setItem('Team2_points', Team2_points);
			break;
		case 'Tie':
			Team1_points = +Team1_points + +PriceTask;
			Team2_points = +Team2_points + +PriceTask;
			sessionStorage.setItem('Team1_points', Team1_points);
			sessionStorage.setItem('Team2_points', Team2_points);
			break;
	}

	sessionStorage.setItem('task_' + CurRow + '_' + CurCol, "disabled");
} 