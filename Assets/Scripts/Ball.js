#pragma strict

private var neutral_start : Vector3;

function Start () {
	neutral_start = transform.position;
}

function Update () {
	if (transform.position.y < 0)
	{
		transform.position = neutral_start;
	}
}