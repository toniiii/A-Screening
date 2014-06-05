function AcceptNext(){	
	$("#AcceptBtn").animate({opacity:'0.3'},0.1);
	setTimeout(function() {	
		$("#ChildData").show();
		$("#Accept").hide();
		$("#AcceptBtn").animate({opacity:'1'},0.1);
	},200);
}

function ChildDataNext(){
	$("#ChildDataNextBtn").animate({opacity:'0.3'},0.1);
	setTimeout(function() {	
		$("#ParentData").show();
		$("#ChildData").hide();
		window.scrollTo(0,0);
		$("#ChildDataNextBtn").animate({opacity:'1'},0.1);
	},200);
	
}

var QuestionNum = 0;
var QuestionCount = 0;
function ParentDataNext(){
	$("#ParentDataNextBtn").animate({opacity:'0.3'},0.1);
	setTimeout(function() {	
		if(AgeMonth.value > 17)
		{
			QuestionType = 3;
			$("#ParentData").hide();
			$("#Question").show();
			$("#TitleReceptive").show();
			window.scrollTo(0,0);
			QuestionNum = 10+8+23;
			
			if(AgeMonth.value >= 18 && AgeMonth.value < 20)
			{
				QuestionNum = 6+5+23;
				QuestionType = 1;
			}
			else if(AgeMonth.value >= 20 && AgeMonth.value <= 22)
			{
				QuestionNum = 8+8+23;
				QuestionType = 2;
			}
			$("#ParentDataNextBtn").animate({opacity:'1'},0.1);
			$("#barQuestion").css("width", "0%");
			startCount();
		}
		else
		{
			alert("กรุณากรอกอายุให้ถูกต้อง (เด็กจะต้องอายุต้องมากกว่าหรือเท่ากับ 18 เดือน)");	
			$("#ParentDataNextBtn").animate({opacity:'1'},0.1);
		}
	},200);
}

function TitleReceptiveNext(){
	$("#TitleReceptiveNextBtn").animate({opacity:'0.3'},0.1);	
	setTimeout(function() {	
		$("#TitleReceptive").hide();
		$("#Receptive").show();
		$("#Recep1").show();
		$("#TitleReceptiveNextBtn").animate({opacity:'1'},0.1);
	},200);
}

function TitleExpressiveNext(){
	$("#TitleExpressiveNextBtn").animate({opacity:'0.3'},0.1);	
	setTimeout(function() {	
		$("#TitleExpressive").hide();
		$("#Expressive").show();
		$("#Express1").show();
		$("#TitleExpressiveNextBtn").animate({opacity:'1'},0.1);
	},200);
}

function TitleMchatNext(){
	$("#TitleMchatNextBtn").animate({opacity:'0.3'},0.1);	
	setTimeout(function() {	
		$("#TitleMchat").hide();
		$("#Mchat").show();
		$("#Mchat1").show();
		$("#TitleMchatNextBtn").animate({opacity:'1'},0.1);
	},200);
}

function ParentDataBack(){
	$("#ParentDataBackBtn").animate({opacity:'0.3'},0.1);	
	setTimeout(function() {	
		$("#ParentData").hide();
		$("#Question").hide();
		$("#ChildData").show();
		$("#ParentDataBackBtn").animate({opacity:'1'},0.1);
	},200);
}

function QuestionNext(){	
	$("#QuestionNextBtn").animate({opacity:'0.3'},0.1);
	setTimeout(function() {	
		diagnose();
		window.scrollTo(0,0);
		$("#QuestionNextBtn").animate({opacity:'1'},0.1);
	},200);
}

function AnswerNext(){
	$("#AnswerNextBtn").animate({opacity:'0.3'},0.1);
	setTimeout(function() {	
		SaveData();
		//$("#Answer").hide();
		//$("#EvaluationDiv").show();	
		$("#AnswerNextBtn").animate({opacity:'1'},0.1);
	},200);
}

function EvaluationNext(){
	$("#EvaluationNextBtn").animate({opacity:'0.3'},0.1);
	setTimeout(function() {	
		SaveData();
		$("#EvaluationNextBtn").animate({opacity:'1'},0.1);
	},200);
}

function CountBar() {
	QuestionCount++;
	var widthBar = (QuestionCount/QuestionNum*100)+"%";
	$("#barQuestion").css("width", widthBar);
}

function CountBarBack() {
	QuestionCount--;
	var widthBar = (QuestionCount/QuestionNum*100)+"%";
	$("#barQuestion").css("width", widthBar);
}

