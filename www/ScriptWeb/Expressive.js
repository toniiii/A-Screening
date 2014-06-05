function hideExpressive() {
	$("#Express1").hide();
	$("#Express2").hide();
	$("#Express3").hide();
	$("#Express4").hide();
	$("#Express5").hide();
	$("#Express6").hide();
	$("#Express7").hide();
	$("#Express8").hide();
}

function Express1Back() {
	$("#Back11").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Receptive").show();
		$("#Expressive").hide();
		$("#Express1").hide();
		if (QuestionType == 1)
			$("#Recep6").show();
		else if (QuestionType == 2)
			$("#Recep8").show();
		else
			$("#Recep10").show();
		$("#Back11").animate({opacity:'1'},0.1);
		CountBarBack();
	},200);
}
function Express1Can() {
	$("#Can11").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Express1").hide();
		$("#Express2").show();
		DE[0] = "Yes";
		$("#Can11").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Express1May() {
	$("#May11").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Express1").hide();
		$("#Express2").show();
		DE[0] = "Some";
		$("#May11").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Express1Cant() {
	$("#Cant11").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Express1").hide();
		$("#Express2").show();
		DE[0] = "No";
		$("#Cant11").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
/*--------------------------------*/
function Express2Back() {
	$("#Back12").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Express2").hide();
		$("#Express1").show();
		$("#Back12").animate({opacity:'1'},0.1);
		CountBarBack();
	},200);
}
function Express2Can() {
	$("#Can12").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Express2").hide();
		$("#Express3").show();
		DE[1] = "Yes";
		$("#Can12").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Express2May() {
	$("#May12").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Express2").hide();
		$("#Express3").show();
		DE[1] = "Some";
		$("#May12").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Express2Cant() {
	$("#Cant12").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Express2").hide();
		$("#Express3").show();
		DE[1] = "No";
		$("#Cant12").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}

/*--------------------------------*/
function Express3Back() {
	$("#Back13").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Express3").hide();
		$("#Express2").show();
		$("#Back13").animate({opacity:'1'},0.1);
		CountBarBack();
	},200);
}
function Express3Can() {
	$("#Can13").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Express3").hide();
		$("#Express4").show();
		DE[2] = "Yes";
		$("#Can13").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Express3May() {
	$("#May13").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Express3").hide();
		$("#Express4").show();
		DE[2] = "Some";
		$("#May13").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Express3Cant() {
	$("#Cant13").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Express3").hide();
		$("#Express4").show();
		DE[2] = "No";
		$("#Cant13").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}

/*--------------------------------*/
function Express4Back() {
	$("#Back14").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Express4").hide();
		$("#Express3").show();
		$("#Back14").animate({opacity:'1'},0.1);
		CountBarBack();
	},200);
}
function Express4Can() {
	$("#Can14").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Express4").hide();
		$("#Express5").show();
		DE[3] = "Yes";
		$("#Can14").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Express4May() {
	$("#May14").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Express4").hide();
		$("#Express5").show();
		DE[3] = "Some";
		$("#May14").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Express4Cant() {
	$("#Cant14").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Express4").hide();
		$("#Express5").show();
		DE[3] = "No";
		$("#Cant14").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}

/*--------------------------------*/
function Express5Back() {
	$("#Back15").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Express5").hide();
		$("#Express4").show();
		$("#Back15").animate({opacity:'1'},0.1);
		CountBarBack();
	},200);
}
function Express5Can() {
	$("#Can15").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Express5").hide();
		if (QuestionType == 1)
		{
			$("#Expressive").hide();
			$("#TitleMchat").show();
		}
		else
			$("#Express6").show();
		DE[4] = "Yes";
		$("#Can15").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Express5May() {
	$("#May15").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Express5").hide();
		if (QuestionType == 1)
		{
			$("#Expressive").hide();
			$("#TitleMchat").show();
		}
		else
			$("#Express6").show();
		DE[4] = "Some";
		$("#May15").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Express5Cant() {
	$("#Cant15").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Express5").hide();
		if (QuestionType == 1)
		{
			$("#Expressive").hide();
			$("#TitleMchat").show();
		}
		else
			$("#Express6").show();
		DE[4] = "No";
		$("#Cant15").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}

/*--------------------------------*/
function Express6Back() {
	$("#Back16").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Express6").hide();
		$("#Express5").show();
		$("#Back16").animate({opacity:'1'},0.1);
		CountBarBack();
	},200);
}
function Express6Can() {
	$("#Can16").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Express6").hide();
		$("#Express7").show();
		DE[5] = "Yes";
		$("#Can16").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Express6May() {
	$("#May16").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Express6").hide();
		$("#Express7").show();
		DE[5] = "Some";
		$("#May16").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Express6Cant() {
	$("#Cant16").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Express6").hide();
		$("#Express7").show();
		DE[5] = "No";
		$("#Cant16").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}

/*--------------------------------*/
function Express7Back() {
	$("#Back17").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Express7").hide();
		$("#Express6").show();
		$("#Back17").animate({opacity:'1'},0.1);
		CountBarBack();
	},200);
}
function Express7Can() {
	$("#Can17").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Express7").hide();
		$("#Express8").show();
		DE[6] = "Yes";
		$("#Can17").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Express7May() {
	$("#May17").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Express7").hide();
		$("#Express8").show();
		DE[6] = "Some";
		$("#May17").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Express7Cant() {
	$("#Cant17").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Express7").hide();
		$("#Express8").show();
		DE[6] = "No";
		$("#Cant17").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}

/*--------------------------------*/
function Express8Back() {
	$("#Back18").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Express8").hide();
		$("#Express7").show();
		$("#Back18").animate({opacity:'1'},0.1);
		CountBarBack();
	},200);
}
function Express8Can() {
	$("#Can18").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Express8").hide();
		$("#Expressive").hide();
		$("#TitleMchat").show();
		DE[7] = "Yes";
		$("#Can18").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Express8May() {
	$("#May18").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Express8").hide();
		$("#Expressive").hide();
		$("#TitleMchat").show();
		DE[7] = "Some";
		$("#May18").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Express8Cant() {
	$("#Cant18").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Express8").hide();
		$("#Expressive").hide();
		$("#TitleMchat").show();
		DE[7] = "No";
		$("#Cant18").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}