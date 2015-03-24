#pragma strict

private var has_ball : boolean;
private var mouse_down : boolean;

public var ball_pfb : Rigidbody;
public var speed : int = 30;

function Start () {
	has_ball = false;
	mouse_down = false;
}

function Update () {
	if (Input.GetButton("Fire1"))
	{
		if (!mouse_down)
		{
			if (has_ball)
			{
				var clone : Rigidbody = Instantiate(ball_pfb, transform.position, transform.rotation);
				clone.velocity = transform.TransformDirection(Vector3(0,speed/2,speed));
				has_ball = false;
			}
			else
			{
				//shoot rawkets
			}
			
			mouse_down = true;
		}
	}
	else
	{
		mouse_down = false;
	}
}