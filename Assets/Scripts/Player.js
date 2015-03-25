#pragma strict

private var has_ball : boolean;
private var mouse_down : boolean;
private var rocket_launcher : GameObject;
private var player_ball : GameObject;

public var ball_pfb : Rigidbody;
public var speed : int = 30;
public var weapon : UI.Text;
public var location : String = "/Player/Camera/";

function Start () {
	has_ball = false;
	mouse_down = false;
	
	rocket_launcher = GameObject.Find(location + "RocketLauncher");
	player_ball = GameObject.Find(location + "PlayerBall");
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
	
	if (has_ball)
	{
		weapon.text = "Ball";
		player_ball.renderer.enabled = true;
		rocket_launcher.renderer.enabled = false;
	}
	else
	{
		weapon.text = "Rocket";
		player_ball.renderer.enabled = false;
		rocket_launcher.renderer.enabled = true;
	}
}