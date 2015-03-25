#pragma strict

private var has_ball : boolean;
private var mouse_down : boolean;

private var rocket_launcher : GameObject;
private var player_ball : GameObject;

private var ball_speed : int = 20;
public var rocket_speed : int = 40;

public var rocket_pfb : Rigidbody;
public var ball_pfb : Rigidbody;

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
				var ball_clone : Rigidbody = Instantiate(ball_pfb, transform.position, transform.rotation);
				ball_clone.velocity = transform.TransformDirection(Vector3(0,ball_speed/2,ball_speed));
				has_ball = false;
			}
			else
			{
				var rocket_clone : Rigidbody = Instantiate(rocket_pfb, transform.position, transform.rotation);
				rocket_clone.velocity = transform.TransformDirection(Vector3(0,0,rocket_speed));
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