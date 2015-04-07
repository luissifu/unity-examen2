#pragma strict

private var neutral_start : Vector3 = Vector3(0,8,0);

function Update () {
	if (transform.position.y < 0)
	{
		reset();
	}
}

function reset() {
	transform.position = neutral_start;
	rigidbody.velocity = Vector3.zero;
	rigidbody.angularVelocity = Vector3.zero;
}