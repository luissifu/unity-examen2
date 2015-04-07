public var which : String;
public var score : int = 0;
public var health : int = 1000;

private var start_pos : Vector3;

function Start() {
	start_pos = transform.position;
}

function Update() {
	if (health <= 0)
	{
		transform.position = start_pos;
		health = 1001;
	}
}

function OnControllerColliderHit (hit : ControllerColliderHit) {
	if (hit.gameObject.tag == "Ball")
	{
		var spawner : GameObject = GameObject.Find("/" + which + "/Camera/ObjectSpawner");
		var pscript = spawner.GetComponent("Player");
		pscript.has_ball = true;
		Destroy(hit.gameObject);
	}
}

function drop_ball() {
	var spawner : GameObject = GameObject.Find("/" + which + "/Camera/ObjectSpawner");
	var pscript = spawner.GetComponent("Player");
	pscript.drop_it();
	health -= 250;
}