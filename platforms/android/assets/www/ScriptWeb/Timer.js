var c = 0;
var t;
var timer_is_on = 0;

function timedCount()
{
	document.getElementById("txt").value=c;
	c = c+1;
	t = setTimeout(function(){timedCount()},1000);
}

function startCount()
{
	if (!timer_is_on)
	{
		timer_is_on=1;
		timedCount();
	}
	else
	{
		clearTimeout(t);
		timer_is_on=1;
		timedCount();	
	}
}

function stopCount()
{
	clearTimeout(t);
	timer_is_on=0;
}