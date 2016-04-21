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

function calculatePayments()
{
	var price = document.form.vehicle.value, payment = document.form.payment.value, term = document.form.term.value, amount, interest = 0.03;
	var top = ((price-payment)*(interest/12));
	var bottom = 1 - (Math.pow((1+interest/12), -term));
	amount = top / bottom;
	
	//alert(top);
	//alert(bottom);
	//alert("bottom");
	alert("Your payments are: $" + amount.toFixed(2));
}

function calculateEstimatedCost()
{
	var i;
	for (i = 0; i < document.form.rentaltime.length; i++)
	{
		if (document.form.rentaltime[i].checked)
		{
			var timeRented = document.form.rentaltime[i].value;
			break;
		}
	}
	
	for (i = 0; i < document.form.cartype.length; i++)
	{
		if (document.form.cartype[i].checked)
		{
			var carType = document.form.cartype[i].value;
			break;
		}
	}
	
	var extras = 0;
	var extrasName = " ";
	
	for(i = 0; i < document.form.extra.length; i++)
	{
		 if (document.form.extra[i].checked)
		{
			extras = parseInt(extras) + parseInt(document.form.extra[i].value);
			
			if(document.form.extra[i].value == 10)
			{
				extrasName = extrasName + "A/C; ";
			}
			if(document.form.extra[i].value == 100)
			{
				extrasName = extrasName + "Working Brakes; ";
			}
			if(document.form.extra[i].value == 20)
			{
				extrasName = extrasName + "Cruise Control; ";
			}
			if(document.form.extra[i].value == 30)
			{
				extrasName = extrasName + "Baby Seat; ";
			}
		}
	}
	
	var rentTotal = (parseInt(timeRented) * parseInt(carType)) + parseInt(extras);
	alert("Total: " + rentTotal + "\n" + "(Including extras: " +extrasName + ")");
}
