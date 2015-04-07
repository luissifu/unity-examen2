#pragma strict

public var btn : UI.Button;
public var action : String;

function Start () {
	btn.onClick.AddListener(on_click);
}

function on_click () {
	if (action == "Quit")
	{
		Application.Quit();
	}
	else
	{
		Application.LoadLevel(action);
	}
}