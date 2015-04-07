#pragma strict

function OnTriggerStay (other : Collider) {
	if (other.gameObject.tag == "Player")
	{
		var pscript : Play = other.gameObject.GetComponent(Play);
		pscript.health--;
	}
	
}