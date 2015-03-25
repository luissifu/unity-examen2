#pragma strict

function Start () {
	var exp : Explosion = GetComponent(Explosion);
	exp.particleSystem.Play();
	Destroy(this.gameObject, exp.particleSystem.duration);
}