let selectedFile;
console.log(window.XLSX);
bsCustomFileInput.init();

document.getElementById('customFileLangHTML').addEventListener("change", (event) => {
    console.log("test");
    selectedFile = event.target.files[0];
    document.getElementById('labelCustomFileLangHTML').style.overflow='hidden';
    console.log(selectedFile);
    //selectedFile = csvConverter(selectedFile);
})

let data=[{
    "name":"abc",
    "data":"scd",
    "abc":"sdef"
}]

//HARDCODE BUTTON UPLOAD


document.getElementById('button').addEventListener("click", () => {
    console.log("click 1")
    document.getElementById('mtable').style.display = "";
    document.getElementById('indicatorChecklist').style.display = "";
    document.getElementById('newAnnouncement').style.display = "";
    document.getElementById('success').style.display ="none";
});

document.getElementById('submit').addEventListener("click", () => {
    //clear announcement and hide report desplay
    document.getElementById('announcement').value = "";
    document.getElementById('mtable').style.display = "none";
    document.getElementById('indicatorChecklist').style.display = "none";
    document.getElementById('newAnnouncement').style.display = "none";
    document.getElementById('success').style.display = "";

    //create new report based off of checklist
    console.log(weatherInfo);
    console.log(compileReport());
    $.post("http://localhost:3004/weather/",compileReport());
    console.log("sent");
});

// document.getElementById('morning').addEventListener("click", () => {
//     document.getElementById('morningtable').style.display = "";
//     document.getElementById('eveningtable').style.display = "none";
// });

// document.getElementById('evening').addEventListener("click", () => {
//     document.getElementById('morningtable').style.display = "none";
//     document.getElementById('eveningtable').style.display = "";
// });

function validate(){
    if(!document.getElementById('temp').checked){
        document.getElementById('temp1').style.display = "none";
    }
    else{
        document.getElementById('temp1').style.display = "";
    }

    if(!document.getElementById('tempHigh').checked){
        document.getElementById('tempHigh1').style.display = "none";
    }
    else{
        document.getElementById('tempHigh1').style.display = "";
    }

    if(!document.getElementById('tempLow').checked){
        document.getElementById('tempLow1').style.display = "none";
    }
    else{
        document.getElementById('tempLow1').style.display = "";
    }

    if(!document.getElementById('hum').checked){
        document.getElementById('hum1').style.display = "none";
    }
    else{
        document.getElementById('hum1').style.display = "";
    }

    if(!document.getElementById('heatIndex').checked){
        document.getElementById('heatIndex1').style.display = "none";
    }
    else{
        document.getElementById('heatIndex1').style.display = "";
    }

    if(!document.getElementById('coldWind').checked){
        document.getElementById('coldWind1').style.display = "none";
    }
    else{
        document.getElementById('coldWind1').style.display = "";
    }

    if(!document.getElementById('dewPoint').checked){
        document.getElementById('dewPoint1').style.display = "none";
    }
    else{
        document.getElementById('dewPoint1').style.display = "";
    }
    
    if(!document.getElementById('barometer').checked){
        document.getElementById('barometer1').style.display = "none";
    }
    else{
        document.getElementById('barometer1').style.display = "";
    }

    if(!document.getElementById('windSpeed').checked){
        document.getElementById('windSpeed1').style.display = "none";
    }
    else{
        document.getElementById('windSpeed1').style.display = "";
    }

    if(!document.getElementById('windDir').checked){
        document.getElementById('windDir1').style.display = "none";
    }
    else{
        document.getElementById('windDir1').style.display = "";
    }

    if(!document.getElementById('highWindSpeed').checked){
        document.getElementById('highWindSpeed1').style.display = "none";
    }
    else{
        document.getElementById('highWindSpeed1').style.display = "";
    }

    if(!document.getElementById('bulboHumedo').checked){
        document.getElementById('bulboHumedo1').style.display = "none";
    }
    else{
        document.getElementById('bulboHumedo1').style.display = "";
    }

    if(!document.getElementById('rainRate').checked){
        document.getElementById('rainRate1').style.display = "none";
    }
    else{
        document.getElementById('rainRate1').style.display = "";
    }

    if(!document.getElementById('rain').checked){
        document.getElementById('rain1').style.display = "none";
    }
    else{
        document.getElementById('rain1').style.display = "";
    }

    if(!document.getElementById('runningWind').checked){
        document.getElementById('runningWind1').style.display = "none";
    }
    else{
        document.getElementById('runningWind1').style.display = "";
    }

    if(!document.getElementById('highWindDir').checked){
        document.getElementById('highWindDir1').style.display = "none";
    }
    else{
        document.getElementById('highWindDir1').style.display = "";
    }

    if(!document.getElementById('THW').checked){
        document.getElementById('THW1').style.display = "none";
    }
    else{
        document.getElementById('THW1').style.display = "";
    }

    if(!document.getElementById('ET').checked){
        document.getElementById('ET1').style.display = "none";
    }
    else{
        document.getElementById('ET1').style.display = "";
    }
    if(!document.getElementById('degreeHeat').checked){
        document.getElementById('degreeHeat1').style.display = "none";
    }
    else{
        document.getElementById('degreeHeat1').style.display = "";
    }
    if(!document.getElementById('degreeCool').checked){
        document.getElementById('degreeCool1').style.display = "none";
    }
    else{
        document.getElementById('degreeCool1').style.display = "";
    }
}


var announcement;
var dateControl;
var dateSet;
var timeSet;
var dateControlSet;
var reportTime;
var reportDate;
var weatherInfo;    //JSON with corresponing weather info

document.getElementById('reportTime').addEventListener("input", () => { //read date and time selected
    dateControl = document.querySelector('input[type="datetime-local');
    console.log(dateControl.value);
    dateControlSet = dateControl.value;
    dateSet = dateControlSet.substring(0, dateControlSet.length - 6);   //format date
    console.log("dateSet: " + dateSet);
    timeSet = dateControlSet.substring(11, dateControlSet.length);  //format time
    timeSet = timeSetFormat(timeSet);   //round timeSet to 30 min interval
    console.log("timeSet: " + timeSet);
});


document.getElementById('button').addEventListener("click", () => {
    document.getElementById('reportSettings').style.display = "";
    XLSX.utils.json_to_sheet(data, 'out.xlsx');
    if(selectedFile){
        let count = 0;
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);    //read excel file as binary string
        fileReader.onload = (event)=>{  //use XLSX library
         let data = event.target.result;
         let workbook = XLSX.read(data,{type:"binary", cellDates: true});
         console.log(workbook);
         console.log("Workbook logged");
         workbook.SheetNames.forEach(sheet => {
              var rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet], {range:11});

                /*
                --------------------------
                PREVIOUS FORMAT INDICATORS
                --------------------------
              console.log(rowObject);
              console.log(typeof rowObject[0]);
              
              //document.getElementById("jsondata").innerHTML = JSON.stringify(rowObject,undefined,4); //stringify to display on website
              console.log("Date: " + rowObject[19].__EMPTY);
              console.log("Time: " + rowObject[19].__EMPTY_1);
              console.log(typeof JSON.stringify(rowObject[1].__EMPTY,undefined,4));
              console.log(typeof rowObject[1].__EMPTY_1);

              //Traverse rowObject array to find given time and
              console.log("Stringified rowObject Date:") ;
              console.log(JSON.stringify(rowObject[19].__EMPTY,undefined,4));
              console.log("Stringified rowObject Time:");
              console.log(JSON.stringify(rowObject[19].__EMPTY_1,undefined,4));
              console.log("dateControl:");
              console.log(dateControlSet);

              

              console.log(formatReportTime(rowObject[19].__EMPTY_1));//excel time is 8 hours ahead - need to adjust
              */

              for(var i = 0; i<rowObject.length; i++){
                //document.getElementById("jsondata").innerHTML = JSON.stringify(rowObject,undefined,4); //rowObject[i] contains data
                
                let checkDate = formatReportDate(rowObject[i].__EMPTY);
                let checkTime = formatReportTime(rowObject[i].__EMPTY);

                if(checkDate == dateSet && checkTime == timeSet){   //if date&time selected match a date&time on the excel sheet
                    //document.getElementById("jsondata").innerHTML = JSON.stringify(rowObject[i],undefined,4); //rowObject[i] contains data

                    document.getElementById("excelDate").innerHTML = checkDate;
                    document.getElementById("excelTime").innerHTML = checkTime;
                    document.getElementById("excelBar").innerHTML = rowObject[i].__EMPTY_1;
                    document.getElementById("excelTemp").innerHTML = rowObject[i].__EMPTY_2;
                    document.getElementById("excelTempHigh").innerHTML = rowObject[i].__EMPTY_3;
                    document.getElementById("excelTempLow").innerHTML = rowObject[i].__EMPTY_4;
                    document.getElementById("excelHum").innerHTML = rowObject[i].__EMPTY_5;
                    document.getElementById("excelDewPoint").innerHTML = rowObject[i].__EMPTY_6;
                    document.getElementById("excelBulboHumedo").innerHTML = rowObject[i].__EMPTY_7;
                    document.getElementById("excelWindSpeed").innerHTML = rowObject[i].__EMPTY_8;
                    document.getElementById("excelWindDir").innerHTML = rowObject[i].__EMPTY_9;
                    document.getElementById("excelRunningWind").innerHTML = rowObject[i].__EMPTY_10;
                    document.getElementById("excelHighWind").innerHTML = rowObject[i].__EMPTY_11;
                    document.getElementById("excelHighWindDir").innerHTML = rowObject[i].__EMPTY_12;
                    document.getElementById("excelColdWind").innerHTML = rowObject[i].__EMPTY_13;
                    document.getElementById("excelHeatIndex").innerHTML = rowObject[i].__EMPTY_14;
                    document.getElementById("excelTHW").innerHTML = rowObject[i].__EMPTY_15;
                    document.getElementById("excelRain").innerHTML = rowObject[i].__EMPTY_16;
                    document.getElementById("excelRainRate").innerHTML = rowObject[i].__EMPTY_17;
                    document.getElementById("excelET").innerHTML = rowObject[i].__EMPTY_18;
                    document.getElementById("excelDegreeHeat").innerHTML = rowObject[i].__EMPTY_19;
                    document.getElementById("excelDegreeCool").innerHTML = rowObject[i].__EMPTY_20;

                    weatherInfo = rowObject[i];

                    break;
                }
                
              }
         });
        }
    }
});



function formatReportDate(date){
    let tempDate = JSON.stringify(date,undefined,4);  
    reportDate = tempDate.substring(1, tempDate.length - 15);
    return reportDate;
}

function formatReportTime(time){
    let tempTime = JSON.stringify(time,undefined,4);
    reportTime = tempTime.substring(12, tempTime.length - 9);
    let tempArr = reportTime.split(":");
    for(var i=0; i<tempArr.length; i++){
        tempArr[i] = +tempArr[i];
    }

    //Move time back 7 hours
    if(tempArr[0] >= 7){
        tempArr[0] -= 7;
    }
    else{
        let carryOver = Math.abs(tempArr[0] - 7);
        tempArr[0] = 24 - carryOver;
    }
    //reformat by adding starting 0's
    if(tempArr[1] == '0'){
        tempArr[1] = '00';
    }
    if(tempArr[0] < 10){
        tempArr[0] = '0' + tempArr[0];
    } 


    reportTime = tempArr.join(':');
    return reportTime;
}



//format the time set to be on the hour
function timeSetFormat(time){
    let tempArr = time.split(":");
    for(var i=0; i<tempArr.length; i++){
        tempArr[i] = +tempArr[i];
    }
    tempArr = roundTime(tempArr);

    //reformat by adding starting 0's
    if(tempArr[1] == '0'){
        tempArr[1] = '00';
    }
    if(tempArr[0] < 10){
        tempArr[0] = '0' + tempArr[0];
    }

    tempArr = tempArr.join(':');
    return tempArr;
}

//round time to nearest hour
function roundTime(timeArr) {   //takes in tempArr - tempArr[0] is the hours and tempArr[1] is the minutes
    if(timeArr[1] < 30){
        timeArr[1] = 0;
    }
    else if(timeArr[1] >= 30){
        timeArr[0] += 1;
        timeArr[1] = 0;
    }
    return timeArr;
}

//check Check Boxes for weather report upload
function checklist(){
    let indicatorsToUpload = {};
    let key, value, tempKey, tempVal;

    var checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked'), i;

    for(i=0; i<checkedBoxes.length; i++){
        tempKey = 'name' + checkedBoxes[i].name;
        key = document.getElementById(tempKey).innerHTML;
        tempVal = 'excel' + checkedBoxes[i].name
        value = document.getElementById(tempVal).innerHTML;
        indicatorsToUpload[key] = value;
    }
    return JSON.stringify(indicatorsToUpload);
}

document.getElementById('announcement').addEventListener('change', function (event){
    announcement =  event.target.value; 
});

function compileReport(){
    let indicators = checklist();
    let reportToUpload = {
        "date": dateSet,
        "time": timeSet,
        "weatherinfo": indicators,
        "announcement": announcement
    };
    return reportToUpload;
}
