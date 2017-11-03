#pragma strict

function Start () {
	
}

function Update () {
	if(Input.GetKey(KeyCode.UpArrow))
		transform.Rotate(Vector3(20,0,0));

	if(Input.GetKey(KeyCode.DownArrow))
		transform.Rotate(Vector3(-20,0,0));
}
