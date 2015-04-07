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
	else if (action == "Resume")
	{
		Time.timeScale = 1.0;
		var pause_menu : GameObject = GameObject.Find("PauseMenu");
		pause_menu.SetActive(false);
	}
	else
	{
		Time.timeScale = 1.0;
		Application.LoadLevel(action);
	}
}