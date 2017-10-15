function set_names() {
	var value1 = document.getElementById("Team1").value;
	var value2 = document.getElementById("Team2").value;
	
	sessionStorage.setItem('Team1_name', value1);
	sessionStorage.setItem('Team2_name', value2);

	sessionStorage.setItem('Team1_points', "0");
	sessionStorage.setItem('Team2_points', "0");

	sessionStorage.setItem('task_1_1', "enabled");
	sessionStorage.setItem('task_1_2', "enabled");
	sessionStorage.setItem('task_1_3', "enabled");
	sessionStorage.setItem('task_1_4', "enabled");

	sessionStorage.setItem('task_2_1', "enabled");
	sessionStorage.setItem('task_2_2', "enabled");
	sessionStorage.setItem('task_2_3', "enabled");
	sessionStorage.setItem('task_2_4', "enabled");

	sessionStorage.setItem('task_3_1', "enabled");
	sessionStorage.setItem('task_3_2', "enabled");
	sessionStorage.setItem('task_3_3', "enabled");
	sessionStorage.setItem('task_3_4', "enabled");

	sessionStorage.setItem('task_4_1', "enabled");
	sessionStorage.setItem('task_4_2', "enabled");
	sessionStorage.setItem('task_4_3', "enabled");
	sessionStorage.setItem('task_4_4', "enabled");

	sessionStorage.setItem('task1_name', "Музыка и фильмы");
	sessionStorage.setItem('task2_name', "Один за всех");
	sessionStorage.setItem('task3_name', "Плечом к плечу");
	sessionStorage.setItem('task4_name', "Шевели мозгами");

	sessionStorage.setItem('TaskCurrent_row', "0");
	sessionStorage.setItem('TaskCurrent_column', "0");

}