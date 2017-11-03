#pragma strict

function Start () {
	
}

function Update () 
{
	if(Input.GetKey(KeyCode.DownArrow))
		transform.Translate(Vector3(0,0,-1));

	if(Input.GetKey(KeyCode.UpArrow))
		transform.Translate(Vector3(0,0,1));

	if(Input.GetKey(KeyCode.LeftArrow))
		transform.Translate(Vector3(-1,0,0));

	if(Input.GetKey(KeyCode.RightArrow))
		transform.Translate(Vector3(1,0,0));
}
