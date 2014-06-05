function hideReceptive() {
	$("#Recep1").hide();
	$("#Recep2").hide();
	$("#Recep3").hide();
	$("#Recep4").hide();
	$("#Recep5").hide();
	$("#Recep6").hide();
	$("#Recep7").hide();
	$("#Recep8").hide();
	$("#Recep9").hide();
	$("#Recep10").hide();
}

function Recep1Back() {
	$("#Back").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#ParentData").show();
		$("#Question").hide();
		$("#Receptive").hide();
		$("#Recep1").hide();
		$("#Back").animate({opacity:'1'},0.1);
		CountBarBack();
	},200);
}
function Recep1Can() {
	$("#Can").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Recep1").hide();
		$("#Recep2").show();
		DR[0] = "Yes";
		$("#Can").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Recep1May() {
	$("#May").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Recep1").hide();
		$("#Recep2").show();
		DR[0] = "Some";
		$("#May").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Recep1Cant() {
	$("#Cant").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Recep1").hide();
		$("#Recep2").show();
		DR[0] = "No";
		$("#Cant").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
/*--------------------------------*/
function Recep2Back() {
	$("#Back2").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Recep1").show();
		$("#Recep2").hide();
		$("#Back2").animate({opacity:'1'},0.1);
		CountBarBack();
	},200);
}
function Recep2Can() {
    $("#Can2").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Recep2").hide();
		$("#Recep3").show();
		DR[1] = "Yes";
		$("#Can2").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Recep2May() {
	$("#May2").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Recep2").hide();
		$("#Recep3").show();
		DR[1] = "Some";
		$("#May2").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Recep2Cant() {
	$("#Cant2").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Recep2").hide();
		$("#Recep3").show();
		DR[1] = "No";
		$("#Cant2").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}

/*--------------------------------*/
function Recep3Back() {
	$("#Back3").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Recep2").show();
		$("#Recep3").hide();
		$("#Back3").animate({opacity:'1'},0.1);
		CountBarBack();
	},200);
}
function Recep3Can() {
	$("#Can3").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Recep3").hide();
		$("#Recep4").show();
		DR[2] = "Yes";
		$("#Can3").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Recep3May() {
	$("#May3").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Recep3").hide();
		$("#Recep4").show();
		DR[2] = "Some";
		$("#May").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Recep3Cant() {
	$("#Cant3").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Recep3").hide();
		$("#Recep4").show();
		DR[2] = "No";
		$("#Cant3").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}

/*--------------------------------*/
function Recep4Back() {
	$("#Back4").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Recep3").show();
		$("#Recep4").hide();
		$("#Back4").animate({opacity:'1'},0.1);
		CountBarBack();
	},200);
}
function Recep4Can() {
	$("#Can4").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Recep4").hide();
		$("#Recep5").show();
		DR[3] = "Yes";
		$("#Can4").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Recep4May() {
	$("#May4").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Recep4").hide();
		$("#Recep5").show();
		DR[3] = "Some";
		$("#May4").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Recep4Cant() {
	$("#Cant4").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Recep4").hide();
		$("#Recep5").show();
		DR[3] = "No";
		$("#Cant4").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}

/*--------------------------------*/
function Recep5Back() {
	$("#Back5").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Recep4").show();
		$("#Recep5").hide();
		$("#Back5").animate({opacity:'1'},0.1);
		CountBarBack();
	},200);
}
function Recep5Can() {
	$("#Can5").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Recep5").hide();
		$("#Recep6").show();
		DR[4] = "Yes";
		$("#Can5").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Recep5May() {
	$("#May5").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Recep5").hide();
		$("#Recep6").show();
		DR[4] = "Some";
		$("#May5").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Recep5Cant() {
	$("#Cant5").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Recep5").hide();
		$("#Recep6").show();
		DR[4] = "No";
		$("#Cant5").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}

/*--------------------------------*/
function Recep6Back() {
	$("#Back6").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Recep5").show();
		$("#Recep6").hide();
		$("#Back6").animate({opacity:'1'},0.1);
		CountBarBack();
	},200);
}
function Recep6Can() {
	$("#Can6").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Recep6").hide();
		if (QuestionType == 1)
		{
			$("#Receptive").hide();
			$("#TitleExpressive").show();
		}
		else
			$("#Recep7").show();
		DR[5] = "Yes";
		$("#Can6").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Recep6May() {
	$("#May6").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Recep6").hide();
		if (QuestionType == 1)
		{
			$("#Receptive").hide();
			$("#TitleExpressive").show();
		}
		else
			$("#Recep7").show();
		DR[5] = "Some";
		$("#May6").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Recep6Cant() {
	$("#Cant6").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Recep6").hide();
		if (QuestionType == 1)
		{
			$("#Receptive").hide();
			$("#TitleExpressive").show();
		}
		else
			$("#Recep7").show();
		DR[5] = "No";
		$("#Cant6").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}

/*--------------------------------*/
function Recep7Back() {
	$("#Back7").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Recep6").show();
		$("#Recep7").hide();
		$("#Back7").animate({opacity:'1'},0.1);
		CountBarBack();
	},200);
}
function Recep7Can() {
	$("#Can7").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Recep7").hide();
		$("#Recep8").show();
		DR[6] = "Yes";
		$("#Can7").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Recep7May() {
	$("#May7").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Recep7").hide();
		$("#Recep8").show();
		DR[6] = "Some";
		$("#May7").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Recep7Cant() {
	$("#Cant7").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Recep7").hide();
		$("#Recep8").show();
		DR[6] = "No";
		$("#Cant7").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}

/*--------------------------------*/
function Recep8Back() {
	$("#Back8").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Recep7").show();
		$("#Recep8").hide();
		$("#Back8").animate({opacity:'1'},0.1);
		CountBarBack();
	},200);
}
function Recep8Can() {
	$("#Can8").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Recep8").hide();
		if (QuestionType == 2)
		{
			$("#Receptive").hide();
			$("#TitleExpressive").show();
		}
		else
			$("#Recep9").show();
		DR[7] = "Yes";
		$("#Can8").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Recep8May() {
	$("#May8").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Recep8").hide();
		if (QuestionType == 2)
		{
			$("#Receptive").hide();
			$("#TitleExpressive").show();
		}
		else
			$("#Recep9").show();
		DR[7] = "Some";
		$("#May8").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Recep8Cant() {
	$("#Cant8").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Recep8").hide();
		if (QuestionType == 2)
		{
			$("#Receptive").hide();
			$("#TitleExpressive").show();
		}
		else
			$("#Recep9").show();
		DR[7] = "No";
		$("#Cant8").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}

/*--------------------------------*/
function Recep9Back() {
	$("#Back9").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Recep8").show();
		$("#Recep9").hide();
		$("#Back9").animate({opacity:'1'},0.1);
		CountBarBack();
	},200);
}
function Recep9Can() {
	$("#Can9").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Recep9").hide();
		$("#Recep10").show();
		DR[8] = "Yes";
		$("#Can9").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Recep9May() {
	$("#May9").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Recep9").hide();
		$("#Recep10").show();
		DR[8] = "Some";
		$("#May9").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Recep9Cant() {
	$("#Cant9").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Recep9").hide();
		$("#Recep10").show();
		DR[8] = "No";
		$("#Cant9").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}

/*--------------------------------*/
function Recep10Back() {
	$("#Back10").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Recep9").show();
		$("#Recep10").hide();
		$("#Back10").animate({opacity:'1'},0.1);
		CountBarBack();
	},200);
}
function Recep10Can() {
	$("#Can10").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Recep10").hide();
		$("#Receptive").hide();
		$("#TitleExpressive").show();
		DR[9] = "Yes";
		$("#Can10").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Recep10May() {
	$("#May10").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Recep10").hide();
		$("#Receptive").hide();
		$("#TitleExpressive").show();
		DR[9] = "Some";
		$("#May10").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Recep10Cant() {
	$("#Cant10").animate({opacity:'0.5'},0.1);
	setTimeout(function() {	
		$("#Recep10").hide();
		$("#Receptive").hide();
		$("#TitleExpressive").show();
		DR[9] = "No";
		$("#Cant10").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}