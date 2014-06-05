function diagnose(){
	
	//Receptive Language
	var i = "0";
	i = parseInt(i,10);
	var countDR = "0";
	countDR = parseInt(countDR,10);
	for (i=0;i<10;i++)
		if (DR[i] == "No")
			countDR++;
	
	if (countDR > 2)
	{
		AnswerReceptive = "True";
	}

	//Expressive language
	i=0;
	var countDE = "0";
	countDE = parseInt(countDE,10);
	for (i=0;i<8;i++)
		if (DE[i] == "No")
			countDE++;
	
	if (countDE > 2)
	{
		AnswerExpressive = "True";
	}
	
	//M-Chat
	i=0;
	var countDM = "0";
	countDM = parseInt(countDM,10);
	var countDMCritical = "0";
	countDMCritical = parseInt(countDMCritical,10);
	
	for (i=0;i<10;i++){ //1-10
		if (i==1 || i==6 || i==8) { //2,7,9
			if (DM[i] == "No")
			{
				countDMCritical++;
				countDM++;
			}
		}
		else {
			if (DM[i] == "No")
				countDM++;
		}
	}
	
	if (DM[10] == "Yes") //11
		countDM++;
	
	for (i=11;i<17;i++){ //12-17
		if (i==12 || i==13 || i==14) { //13,14,15
			if (DM[i] == "No")
			{
				countDMCritical++;
				countDM++;
			}
		}
		else {
			if (DM[i] == "No")
				countDM++;
		}
	}
			
	if (DM[17] == "Yes") //18
		countDM++;
	
	if (DM[18] == "No") //19
		countDM++;
			
	if (DM[19] == "Yes") //20
		countDM++;
			
	if (DM[20] == "No") //21
		countDM++;
		
	if (DM[21] == "Yes") //22
		countDM++;
		
	if (DM[22] == "No") //23
 		countDM++;
	
	if (countDMCritical > 1)
	{
		//alert("M-Chat ผิดปกติ Critical ("+countDMCritical+")");
		AnswerMchat = "True";
	}
	else if (countDM > 2)
	{
		//alert("M-Chat ผิดปกติ ("+countDM+")");
		AnswerMchat = "True";
	}
	else
	{
		//alert("M-Chat ปกติ Critical ("+countDMCritical+") ("+countDM+")");
	}
	
	$("#Answer").show();
	if(AnswerMchat == "True")
	{
		$("#TrueLanguage").hide();
		$("#FalseAutism").hide();
	}
	else if (AnswerReceptive == "True" || AnswerExpressive == "True")
	{
		$("#TrueAutism").hide();
		$("#FalseAutism").hide();
	}
	else
	{
		$("#TrueAutism").hide();
		$("#TrueLanguage").hide();
	}

	$("#Question").hide();
	stopCount();
}