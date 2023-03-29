function convertTime() 
{
	var fromValue = document.getElementById("from").value;
	var fromUnit = document.getElementById("from-unit").value;

	var toUnit = document.getElementById("to-unit").value;

	var seconds = 0;
	switch (fromUnit) {
		case "Sec":
			seconds = fromValue;
			break;
		case "Min":
			seconds = fromValue * 60;
			break;
		case "Hour":
			seconds = fromValue * 3600;
			break;
		case "Day":
			seconds = fromValue * 86400;
			break;
		case "Week":
			seconds = fromValue * 604800;
			break;
	}

	var outputValue = 0;
	switch (toUnit) 
	{
		case "Sec":
			outputValue = seconds;
			break;
		case "Min":
			outputValue = seconds / 60;
			break;
		case "Hour":
			outputValue = seconds / 3600;
			break;
		case "Day":
			outputValue = seconds / 86400;
			break;
	    case "Week":
			outputValue = seconds / 604800;
			break;
	}

	document.getElementById("to").value = outputValue;
}

function Length()
{
	var fValue = document.getElementById("froml").value;
	var fUnit = document.getElementById("froml-unit").value;

	var toUnit = document.getElementById("tol-unit").value;
	var value = 0;
	switch(fUnit){
		case "mm":
			value = fValue / 1000;
			break;
		case "cm":
			value = fValue * 0.01;
			break;
		case "m":
			value = fValue;
			break;
		case "km":
			value = fValue * 1000;
			break;
		case "in":
			value = fValue * 2.54/100;
			break;
		case "ft":
			value = fValue * ( 12 * 2.54 ) / 100;
			break;
	}

	var outputval = 0;
	switch(toUnit)
	{
		case "mm":
			outputval = value * 1000;
			break;
		case "cm":
			outputval = value / 0.01;
			break;
		case "m":
			outputval = value;
			break;
		case "km":
			outputval = value / 1000;
			break;
		case "in":
			outputval = value * 100 / 2.54;
			break;
		case "ft":
			outputval = value * 100 / ( 12 * 2.54);
			break;		
	}
	document.getElementById("tol").value = outputval;
}

function weight()
{

	var wValue = document.getElementById("fromw").value;
	var wUnit = document.getElementById("fromw-unit").value;

	var toUnit = document.getElementById("tow-unit").value;
	var valuew = 0;	
	switch(wUnit)
	{
		case "mg":
			valuew = wValue / 1000;
			break;
		case "g":
			valuew = wValue;
			break;
		case "kg":
			valuew = wValue * 1000;
			break;
	}

	var outputw = 0;
	switch(toUnit)
	{
		case "mg":
			outputw = valuew * 1000;
			break;
		case "g":
			outputw = valuew;
			break;
		case "kg":
			outputw = valuew / 1000;
			break;

	}
	document.getElementById("tow").value = outputw;

}

function temperature()
{

	var tValue = document.getElementById("fromt").value;
	var tUnit = document.getElementById("fromt-unit").value;


	var toUnit = document.getElementById("tot-unit").value;
	var valuet = 0;
	switch(tUnit)
	{
		case "C":
			valuet = tValue;
			break;
		case "F":
			valuet = (tValue - 32) * 5 / 9;
			break;
		case "K":
			valuet = tValue - 273.15;
			break;
	}

	var outputt=0;
	switch(toUnit)
	{
		case "C":
			outputt = valuet;
			break;
		case "F":
			outputt = valuet * 9 / 5 + 32;
			break;
		case "K":
			outputt = 273.15 + valuet;
			break;
	}
	document.getElementById("tot").value = outputt;
}