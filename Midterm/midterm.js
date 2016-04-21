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
	if(document.form.firstname.value.length == 0)
		{
			alert("First Name must be inputed");
		}
	if(document.form.lastname.value.length == 0)
		{
			alert("Last name must be inputed");
		}
	if(document.form.areaCode.value != '403')
	{
		alert("Area code must 403");
	}
	
	var areaC = document.form.areaCode.value, phoneN = document.form.phoneNumber.value;
	var totalNumber = areaC + phoneN;
	
	if(totalNumber.length != 10)
	{
		alert("Total phone number must be 10 digits long");
	}
	
	var firstname = document.form.firstname.value;
	var lastname = document.form.lastname.value;
	
	alert("Info put in: \n" + "First Name" + firstname + "\n" + "Last Name: " + lastname + "\n" + "PhoneNumber: " + totalNumber);
}