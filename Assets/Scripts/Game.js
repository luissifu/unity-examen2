#pragma strict

public var time_left : float;
public var timer : UI.Text;

function Update () {
	time_left -= Time.deltaTime;
	
	if (time_left < 30)
	{
		timer.color = Color.red;
	}
	
	timer.text = format_time (Mathf.FloorToInt(time_left));
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