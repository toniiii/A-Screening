function UpdateAge(){
	var the_date  = new Date();
  	var the_month = the_date.getMonth() + 1;
  	var the_day   = the_date.getDate();
  	var the_year  = the_date.getFullYear();
  	var ToDate    = the_month + "/" + the_day + "/" + the_year;
	var today = new Date();
	var DoB = Date.parse(document.getElementById("datepicker").value);
	var DoC = Date.parse(ToDate);
	var AOkay = true;    
	
	var ToDate   = new Date();
	var ToDateYr = ToDate.getFullYear();
	var DateofB  = new Date(DoB);
	var DoBYr    = DateofB.getFullYear();
	var DoBMo    = DateofB.getMonth();
	var DoBDy    = DateofB.getDate();

	var DateofC  = new Date(DoC);
	var DoCYr    = DateofC.getFullYear();
	var DoCMo    = DateofC.getMonth();
	var DoCDy    = DateofC.getDate();
	  
	if (AOkay) {
		var AgeDays  = 0;
		var AgeMonth = 0;
		var AgeWeeks = 0;
		var AgeYears = 0;
		var AgeRmdr  = 0;
	
		mSecDiff   = DoC - DoB;
		AgeDays  = mSecDiff / 86400000;
		AgeMonth = AgeDays / 30.4375;
		//AgeWeeks = AgeDays / 7;
		//AgeYears = AgeDays / 365.24;    
		//AgeYears = Math.floor(AgeYears);
		//AgeRmdr  = (AgeDays - AgeYears * 365.24) / 30.4375;
		AgeMonth = Math.round(AgeMonth);
		AgeDays = AgeDays%30;
		AgeDays = Math.ceil(AgeDays);
		$("#AgeMonth").val(AgeMonth);
		$("#AgeDay").val(AgeDays);
		AgeMonthDay = AgeMonth + "/" + AgeDays;
	}
}