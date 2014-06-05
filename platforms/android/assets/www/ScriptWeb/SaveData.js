function SaveData(){
	
	var data
	data = $("#Autism").serialize()+
				"&R1="+DR[0]+
				"&R2="+DR[1]+
				"&R3="+DR[2]+
				"&R4="+DR[3]+
				"&R5="+DR[4]+
				"&R6="+DR[5]+
				"&R7="+DR[6]+
				"&R8="+DR[7]+
				"&R9="+DR[8]+
				"&R10="+DR[9]+
				
				"&E1="+DE[0]+
				"&E2="+DE[1]+
				"&E3="+DE[2]+
				"&E4="+DE[3]+
				"&E5="+DE[4]+
				"&E6="+DE[5]+
				"&E7="+DE[6]+
				"&E8="+DE[7]+
				
				"&M1="+DM[0]+
				"&M2="+DM[1]+
				"&M3="+DM[2]+
				"&M4="+DM[3]+
				"&M5="+DM[4]+
				"&M6="+DM[5]+
				"&M7="+DM[6]+
				"&M8="+DM[7]+
				"&M9="+DM[8]+
				"&M10="+DM[9]+
				"&M11="+DM[10]+
				"&M12="+DM[11]+
				"&M13="+DM[12]+
				"&M14="+DM[13]+
				"&M15="+DM[14]+
				"&M16="+DM[15]+
				"&M17="+DM[16]+
				"&M18="+DM[17]+
				"&M19="+DM[18]+
				"&M20="+DM[19]+
				"&M21="+DM[20]+
				"&M22="+DM[21]+
				"&M23="+DM[22]+
				
				"&AgeMonthDay="+AgeMonthDay+
				"&AnswerReceptive="+AnswerReceptive+
				"&AnswerExpressive="+AnswerExpressive+
				"&AnswerMchat="+AnswerMchat+
				"&Timer="+c;
    $.ajax({
		type: "POST",
	 	url: "http://cd.ra.mahidol.ac.th/AScreening/SaveData.php",
		data: data,
	 	success: function(data) {
			console.log(data);
			if(data!="Fail"){	
				location.reload();
			}
			else{
				alert("Internet error");
				ReadForWrite("readme.txt",data)
			}
		},
		error: function(){
			alert("Internet error");
			ReadForWrite("readme.txt",data)	
		}
	});
}

function SaveDataFile() {
	for (var x in arrData){
		//alert (arrData[x]);
		$.ajax({
			type: "POST",
			url: "http://cd.ra.mahidol.ac.th/AScreening/SaveData.php",
			data: arrData[x],
			success: function(data) {
				console.log(data);
				if(data!="Fail"){	
					alert("Save to Server");
					WriteToClearFile("readme.txt");
				}
				else{}
			},
			error: function(){
				
			}
		});	
	}
}

function WriteToClearFile(filename){
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
    function gotFS(fileSystem) {
        fileSystem.root.getFile(""+filename, {create: true, exclusive: false}, gotFileEntry, fail);
    }
    
    function gotFileEntry(fileEntry) {
        fileEntry.createWriter(gotFileWriter, fail);
    }
    
    function gotFileWriter(writer) {
        writer.write("");
    }
    function fail(error) {
        console.log("Error: Write file(" +error.code+ ")");
    }
}

function WriteToFile(filename,filedata){
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
    function gotFS(fileSystem) {
        fileSystem.root.getFile(""+filename, {create: true, exclusive: false}, gotFileEntry, fail);
    }
    
    function gotFileEntry(fileEntry) {
        fileEntry.createWriter(gotFileWriter, fail);
    }
    
    function gotFileWriter(writer) {
        writer.write(""+filedata);
		writer.onwriteend = function(evt) {
			alert("Write file Successful");
			location.reload();
        };
    }
    function fail(error) {
        console.log("Error: Write file(" +error.code+ ")");
    }
}

function ReadForWrite(filename,data)
{
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
	
    function gotFS(fileSystem) {
        fileSystem.root.getFile(""+filename, {create: true, exclusive: false}, gotFileEntry, fail);
    }

    function gotFileEntry(fileEntry) {
		fileEntry.file(gotFile, fail);
    }

    function gotFile(file){
		readAsText(file);
    }

    function readAsText(file) {
        var reader = new FileReader();
        reader.onloadend = function(evt) {
            console.log("Read as text"+evt.target.result);
			dataRead = evt.target.result;
			if (dataRead != "")
			{
				var tempData = dataRead+" , "+data;
				WriteToFile("readme.txt",tempData);
			}
			else
			{
				WriteToFile("readme.txt",data);
			}
		};
		reader.readAsText(file);
    }

    function fail(evt) {
        console.log(evt.target.error.code);
    }
}
function ReadFile(filename)
{
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
	
    function gotFS(fileSystem) {
        fileSystem.root.getFile(""+filename, null, gotFileEntry, fail);
    }

    function gotFileEntry(fileEntry) {
        fileEntry.file(gotFile, fail);
    }

    function gotFile(file){
        readAsText(file);
    }

    function readAsText(file) {
        var reader = new FileReader();
        reader.onloadend = function(evt) {
            console.log("Read as text"+evt.target.result);
			dataRead = evt.target.result;
			//alert (dataRead);
        };
		reader.readAsText(file);
    }

    function fail(evt) {
        console.log(evt.target.error.code);
    }
}
