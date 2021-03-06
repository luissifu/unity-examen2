﻿#pragma strict

public var explosion : GameObject;
public var radius : float = 5;
public var power : float = 10;

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
	if (col.gameObject.tag == "Player")
	{
		// other.gameObject.GetComponent(Play).drop_ball();
	}

	var exp_pos : Vector3 = transform.position;
	var colliders : Collider[] = Physics.OverlapSphere(exp_pos, radius);
	for (var hit : Collider in colliders) 
	{
		if (hit && hit.rigidbody)
		{
			hit.rigidbody.AddExplosionForce(power, exp_pos, radius, 3.0);
		}
		else if (hit.gameObject.tag == "Player")
		{
			hit.gameObject.GetComponent(Play).health -= 100;
		}
	}
	explode();
}