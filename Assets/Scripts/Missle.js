#pragma strict

public var explosion : GameObject;

function explode() {
	Instantiate(explosion, transform.position, transform.rotation);
	Destroy(this.gameObject);
}

function Update() {
	if (transform.position.y < 0 || transform.position.y > 60)
	{
		explode();
	}
}

function OnCollisionEnter (col : Collision) {
	//Do more stuff
	explode();
}