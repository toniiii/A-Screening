function hideMchat() {
	$("#Mchat1").hide();
	$("#Mchat2").hide();
	$("#Mchat3").hide();
	$("#Mchat4").hide();
	$("#Mchat5").hide();
	$("#Mchat6").hide();
	$("#Mchat7").hide();
	$("#Mchat8").hide();
	$("#Mchat9").hide();
	$("#Mchat10").hide();
	$("#Mchat11").hide();
	$("#Mchat12").hide();
	$("#Mchat13").hide();
	$("#Mchat14").hide();
	$("#Mchat15").hide();
	$("#Mchat16").hide();
	$("#Mchat17").hide();
	$("#Mchat18").hide();
	$("#Mchat19").hide();
	$("#Mchat20").hide();
	$("#Mchat21").hide();
	$("#Mchat22").hide();
	$("#Mchat23").hide();
}

function Mchat1Back() {
	$("#Back19").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Expressive").show();
		$("#Mchat").hide();
		$("#Mchat1").hide();
		if (QuestionType == 1)
			$("#Express5").show();
		else
			$("#Express8").show();
		$("#Back19").animate({opacity:'1'},0.1);
	},200);
}
function Mchat1Can() {
	$("#Yes").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat1").hide();
		$("#Mchat2").show();
		DM[0] = "Yes";
		$("#Yes").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Mchat1Cant() {
	$("#No").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat1").hide();
		$("#Mchat2").show();
		DM[0] = "No";
		$("#No").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
/*--------------------------------*/
function Mchat2Back() {
	$("#Back20").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat2").hide();
		$("#Mchat1").show();
		$("#Back20").animate({opacity:'1'},0.1);
	},200);
}
function Mchat2Can() {
	$("#Yes2").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat2").hide();
		$("#Mchat3").show();
		DM[1] = "Yes";
		$("#Yes2").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Mchat2Cant() {
	$("#No2").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat2").hide();
		$("#Mchat3").show();
		DM[1] = "No";
		$("#No2").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
/*--------------------------------*/
function Mchat3Back() {
	$("#Back21").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat3").hide();
		$("#Mchat2").show();
		$("#Back21").animate({opacity:'1'},0.1);
	},200);
}
function Mchat3Can() {
	$("#Yes3").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat3").hide();
		$("#Mchat4").show();
		DM[2] = "Yes";
		$("#Yes3").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Mchat3Cant() {
	$("#No3").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat3").hide();
		$("#Mchat4").show();
		DM[2] = "No";
		$("#No3").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
/*--------------------------------*/
function Mchat4Back() {
	$("#Back22").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat4").hide();
		$("#Mchat3").show();
		$("#Back22").animate({opacity:'1'},0.1);
	},200);
}
function Mchat4Can() {
	$("#Yes4").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat4").hide();
		$("#Mchat5").show();
		DM[3] = "Yes";
		$("#Yes4").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Mchat4Cant() {
	$("#No4").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat4").hide();
		$("#Mchat5").show();
		DM[3] = "No";
		$("#No4").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}

/*--------------------------------*/
function Mchat5Back() {
	$("#Back23").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat5").hide();
		$("#Mchat4").show();
		$("#Back23").animate({opacity:'1'},0.1);
	},200);
}
function Mchat5Can() {
	$("#Yes5").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat5").hide();
		$("#Mchat6").show();
		DM[4] = "Yes";
		$("#Yes5").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Mchat5Cant() {
	$("#No5").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat5").hide();
		$("#Mchat6").show();
		DM[4] = "No";
		$("#No5").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}

/*--------------------------------*/
function Mchat6Back() {
	$("#Back24").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat6").hide();
		$("#Mchat5").show();
		$("#Back24").animate({opacity:'1'},0.1);
	},200);
}
function Mchat6Can() {
	$("#Yes6").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat6").hide();
		$("#Mchat7").show();
		DM[5] = "Yes";
		$("#Yes6").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Mchat6Cant() {
	$("#No6").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat6").hide();
		$("#Mchat7").show();
		DM[5] = "No";
		$("#No6").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}

/*--------------------------------*/
function Mchat7Back() {
	$("#Back25").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat7").hide();
		$("#Mchat6").show();
		$("#Back25").animate({opacity:'1'},0.1);
	},200);
}
function Mchat7Can() {
	$("#Yes7").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat7").hide();
		$("#Mchat8").show();
		DM[6] = "Yes";
		$("#Yes7").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Mchat7Cant() {
	$("#No7").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat7").hide();
		$("#Mchat8").show();
		DM[6] = "No";
		$("#No7").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}

/*--------------------------------*/
function Mchat8Back() {
	$("#Back26").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat8").hide();
		$("#Mchat7").show();
		$("#Back26").animate({opacity:'1'},0.1);
	},200);
}
function Mchat8Can() {
	$("#Yes8").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat8").hide();
		$("#Mchat9").show();
		DM[7] = "Yes";
		$("#Yes8").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Mchat8Cant() {
	$("#No8").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat8").hide();
		$("#Mchat9").show();
		DM[7] = "No";
		$("#No8").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}

/*--------------------------------*/
function Mchat9Back() {
	$("#Back27").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat9").hide();
		$("#Mchat8").show();
		$("#Back27").animate({opacity:'1'},0.1);
	},200);
}
function Mchat9Can() {
	$("#Yes9").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat9").hide();
		$("#Mchat10").show();
		DM[8] = "Yes";
		$("#Yes9").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Mchat9Cant() {
	$("#No9").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat9").hide();
		$("#Mchat10").show();
		DM[8] = "No";
		$("#No9").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}

/*--------------------------------*/
function Mchat10Back() {
	$("#Back28").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat10").hide();
		$("#Mchat9").show();
		$("#Back28").animate({opacity:'1'},0.1);
	},200);
}
function Mchat10Can() {
	$("#Yes10").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat10").hide();
		$("#Mchat11").show();
		DM[9] = "Yes";
		$("#Yes10").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Mchat10Cant() {
	$("#No10").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat10").hide();
		$("#Mchat11").show();
		DM[9] = "No";
		$("#No10").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}

/*--------------------------------*/
function Mchat11Back() {
	$("#Back29").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat11").hide();
		$("#Mchat10").show();
		$("#Back29").animate({opacity:'1'},0.1);
	},200);
}
function Mchat11Can() {
	$("#Yes11").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat11").hide();
		$("#Mchat12").show();
		DM[10] = "Yes";
		$("#Yes11").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Mchat11Cant() {
	$("#No11").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat11").hide();
		$("#Mchat12").show();
		DM[10] = "No";
		$("#No11").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
/*--------------------------------*/
function Mchat12Back() {
	$("#Back30").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat12").hide();
		$("#Mchat11").show();
		$("#Back30").animate({opacity:'1'},0.1);
	},200);
}
function Mchat12Can() {
	$("#Yes12").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat12").hide();
		$("#Mchat13").show();
		DM[11] = "Yes";
		$("#Yes12").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Mchat12Cant() {
	$("#No12").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat12").hide();
		$("#Mchat13").show();
		DM[11] = "No";
		$("#No12").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
/*--------------------------------*/
function Mchat13Back() {
	$("#Back31").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat13").hide();
		$("#Mchat12").show();
		$("#Back31").animate({opacity:'1'},0.1);
	},200);
}
function Mchat13Can() {
	$("#Yes13").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat13").hide();
		$("#Mchat14").show();
		DM[12] = "Yes";
		$("#Yes13").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Mchat13Cant() {
	$("#No13").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat13").hide();
		$("#Mchat14").show();
		DM[12] = "No";
		$("#No13").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
/*--------------------------------*/
function Mchat14Back() {
	$("#Back32").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat14").hide();
		$("#Mchat13").show();
		$("#Back32").animate({opacity:'1'},0.1);
	},200);
}
function Mchat14Can() {
	$("#Yes14").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat14").hide();
		$("#Mchat15").show();
		DM[13] = "Yes";
		$("#Yes14").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Mchat14Cant() {
	$("#No14").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat14").hide();
		$("#Mchat15").show();
		DM[13] = "No";
		$("#No14").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}

/*--------------------------------*/
function Mchat15Back() {
	$("#Back33").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat15").hide();
		$("#Mchat14").show();
		$("#Back33").animate({opacity:'1'},0.1);
	},200);
}
function Mchat15Can() {
	$("#Yes15").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat15").hide();
		$("#Mchat16").show();
		DM[14] = "Yes";
		$("#Yes15").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Mchat15Cant() {
	$("#No15").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat15").hide();
		$("#Mchat16").show();
		DM[14] = "No";
		$("#No15").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}

/*--------------------------------*/
function Mchat16Back() {
	$("#Back34").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat16").hide();
		$("#Mchat15").show();
		$("#Back34").animate({opacity:'1'},0.1);
	},200);
}
function Mchat16Can() {
	$("#Yes16").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat16").hide();
		$("#Mchat17").show();
		DM[15] = "Yes";
		$("#Yes16").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Mchat16Cant() {
	$("#No16").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat16").hide();
		$("#Mchat17").show();
		DM[15] = "No";
		$("#No16").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}

/*--------------------------------*/
function Mchat17Back() {
	$("#Back35").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat17").hide();
		$("#Mchat16").show();
		$("#Back35").animate({opacity:'1'},0.1);
	},200);
}
function Mchat17Can() {
	$("#Yes17").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat17").hide();
		$("#Mchat18").show();
		DM[16] = "Yes";
		$("#Yes17").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Mchat17Cant() {
	$("#No17").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat17").hide();
		$("#Mchat18").show();
		DM[16] = "No";
		$("#No17").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}

/*--------------------------------*/
function Mchat18Back() {
	$("#Back36").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat18").hide();
		$("#Mchat17").show();
		$("#Back36").animate({opacity:'1'},0.1);
	},200);
}
function Mchat18Can() {
	$("#Yes18").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat18").hide();
		$("#Mchat19").show();
		DM[17] = "Yes";
		$("#Yes18").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Mchat18Cant() {
	$("#No18").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat18").hide();
		$("#Mchat19").show();
		DM[17] = "No";
		$("#No18").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}

/*--------------------------------*/
function Mchat19Back() {
	$("#Back37").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat19").hide();
		$("#Mchat18").show();
		$("#Back37").animate({opacity:'1'},0.1);
	},200);
}
function Mchat19Can() {
	$("#Yes19").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat19").hide();
		$("#Mchat20").show();
		DM[18] = "Yes";
		$("#Yes19").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Mchat19Cant() {
	$("#No19").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat19").hide();
		$("#Mchat20").show();
		DM[18] = "No";
		$("#No19").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}

/*--------------------------------*/
function Mchat20Back() {
	$("#Back38").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat20").hide();
		$("#Mchat19").show();
		$("#Back38").animate({opacity:'1'},0.1);
	},200);
}
function Mchat20Can() {
	$("#Yes20").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat20").hide();
		$("#Mchat21").show();
		DM[19] = "Yes";
		$("#Yes20").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Mchat20Cant() {
	$("#No20").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat20").hide();
		$("#Mchat21").show();
		DM[19] = "No";
		$("#No20").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}

/*--------------------------------*/
function Mchat21Back() {
	$("#Back39").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat21").hide();
		$("#Mchat20").show();
		$("#Back39").animate({opacity:'1'},0.1);
	},200);
}
function Mchat21Can() {
	$("#Yes21").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat21").hide();
		$("#Mchat22").show();
		DM[20] = "Yes";
		$("#Yes21").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Mchat21Cant() {
	$("#No21").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat21").hide();
		$("#Mchat22").show();
		DM[20] = "No";
		$("#No21").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}

/*--------------------------------*/
function Mchat22Back() {
	$("#Back40").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat22").hide();
		$("#Mchat21").show();
		$("#Back40").animate({opacity:'1'},0.1);
	},200);
}
function Mchat22Can() {
	$("#Yes22").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat22").hide();
		$("#Mchat23").show();
		DM[21] = "Yes";
		$("#Yes22").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Mchat22Cant() {
	$("#No22").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat22").hide();
		$("#Mchat23").show();
		DM[21] = "No";
		$("#No22").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}

/*--------------------------------*/
function Mchat23Back() {
	$("#Back41").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat23").hide();
		$("#Mchat22").show();
		$("#Back41").animate({opacity:'1'},0.1);
	},200);
}
function Mchat23Can() {
	$("#Yes23").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat23").hide();
		$("#Mchat").hide();
		DM[22] = "Yes";
		diagnose();
		window.scrollTo(0,0);
		$("#Yes23").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}
function Mchat23Cant() {
	$("#No23").animate({opacity:'0.5'},0.1);
	setTimeout(function() {
		$("#Mchat20").hide();
		$("#Mchat").hide();
		DM[22] = "No";
		diagnose();
		window.scrollTo(0,0);
		$("#No23").animate({opacity:'1'},0.1);
		CountBar();
	},200);
}