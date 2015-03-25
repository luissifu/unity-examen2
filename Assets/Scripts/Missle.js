#pragma strict

public var explosion : GameObject;

function OnCollisionEnter (col : Collision) {
	Instantiate(explosion, transform.position, transform.rotation);
	//Do more stuff
	Destroy(this.gameObject);
}