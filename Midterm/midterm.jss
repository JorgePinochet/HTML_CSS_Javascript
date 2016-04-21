function checkData()
{
	var i;
	for (i = 0; i < document.form.length; i++)
	{
		if (document.form[i].value.length == 0)
		{
			alert("You must completely fill in the form");
			break;
		}
		
	}
	if(document.form.firstname.value.length > 20)
		{
			alert("First name cannot be longer than 20 characters");
		}
	if(document.form.lastname.value.length > 20)
		{
			alert("Last name cannot be longer than 20 characters");
		}
}