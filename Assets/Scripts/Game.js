#pragma strict

public var time_left : float;
public var timer : UI.Text;
public var p1_score : UI.Text;
public var p2_score : UI.Text;
public var p1_health : UI.Text;
public var p2_health : UI.Text;

public var p1 : GameObject;
public var p2 : GameObject;

public var pause_menu : GameObject;

function Start() {
	pause_menu.SetActive(false);
}

function Update () {
	time_left -= Time.deltaTime;
	
	if (time_left < 30)
	{
		timer.color = Color.red;		
	}
	if (time_left < 0)
	{
		end();
	}
	
	timer.text = format_time (Mathf.FloorToInt(time_left));
	
	var p1_s : int = p1.GetComponent(Play).score;
	var p2_s : int = p2.GetComponent(Play).score;
	p1_score.text = "" + p1_s;
	p2_score.text = "" + p2_s;
	
	var p1_h : int = p1.GetComponent(Play).health;
	p1_health.text = "+" + Mathf.FloorToInt(p1_h / 10);
	
	if (p2_health)
	{
		var p2_h : int = p2.GetComponent(Play).health;
		p2_health.text = "+" + Mathf.FloorToInt(p2_h / 10);
	}
	
	if (Input.GetKeyDown(KeyCode.P))
	{
		Time.timeScale = 0;
		pause_menu.SetActive(true);
	}
}

function format_time (time : int) {
	if (time > 59)
	{
		var minutes = time / 60;
		var seconds = time % 60;

		if (seconds >= 10)
			return minutes + ":" + seconds;
		else
			return minutes + ":0" + seconds;
	}
	else
	{
		return "" + time;
	}
}

function end() {
	var p1_s : int = p1.GetComponent(Play).score;
	var p2_s : int = p2.GetComponent(Play).score;
	
	if (p1_s > p2_s) // p1 win
	{
		Application.LoadLevel("WinP1");
	}
	else if (p1_s < p2_s) // p2 win
	{
		Application.LoadLevel("WinP2");
	}
	else // tie
	{
		Application.LoadLevel("Tie");
	}
}