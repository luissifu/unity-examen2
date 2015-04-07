#pragma strict

public var other : GameObject;

function OnCollisionEnter (col : Collision) {
	if (col.gameObject.tag == "Ball")
	{
		var ball_script = col.gameObject.GetComponent(Ball);
		ball_script.reset();
		
		var play_script = other.GetComponent(Play);
		play_script.score++;
	}
}