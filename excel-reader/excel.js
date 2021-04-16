let selectedFile;
console.log(window.XLSX);
document.getElementById('input').addEventListener("change", (event) => {
    selectedFile = event.target.files[0];
})

let data=[{
    "name":"abc",
    "data":"scd",
    "abc":"sdef"
}]

//hardcode button upload
document.getElementById('upload').addEventListener("click", () => {
    document.getElementById('mtable').style.display = "";
});

document.getElementById('submit').addEventListener("click", () => {
    document.getElementById('mtable').style.display = "none";
    document.getElementById('success').style.display = "";
});

document.getElementById('morning').addEventListener("click", () => {
    document.getElementById('morningtable').style.display = "";
    document.getElementById('eveningtable').style.display = "none";
});

document.getElementById('evening').addEventListener("click", () => {
    document.getElementById('morningtable').style.display = "none";
    document.getElementById('eveningtable').style.display = "";
});

document.getElementsByClassName('calLeft').addEventListener("click", () => {
    if(document.getElementById('april').style.display != "none"){
        document.getElementById('april').style.display = "none";
        document.getElementById('march').style.display = "";
    }
    else if(document.getElementById('may').style.display != "none"){
        document.getElementById('may').style.display = "none";
        document.getElementById('april').style.display = "";
    }
});

document.getElementsByClassName('calRight').addEventListener("click", () => {
    if(document.getElementById('april').style.display != "none"){
        document.getElementById('april').style.display = "none";
        document.getElementById('may').style.display = "";
    }
    else if(document.getElementById('march').style.display != "none"){
        document.getElementById('march').style.display = "none";
        document.getElementById('april').style.display = "";
    }
});


document.getElementById('button').addEventListener("click", () => {
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
              let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
              console.log(rowObject);
              console.log(typeof rowObject[0]);
              

              for(const key of Object.keys(rowObject[count])){
                rowObject[count] = renameKey(rowObject[count], "__EMPTY", "Date");
                rowObject[count] = renameKey(rowObject[count], "__EMPTY_1", "Time");
                rowObject[count] = renameKey(rowObject[count], "Temp", "Temp_Out");
                rowObject[count] = renameKey(rowObject[count], "Hi", "Hi_Temp");
                rowObject[count] = renameKey(rowObject[count], "Low", "Low_Temp");
                rowObject[count] = renameKey(rowObject[count], "Out", "Out_Hum");
                rowObject[count] = renameKey(rowObject[count], "Dew", "Dew_Pt.");
                rowObject[count] = renameKey(rowObject[count], "Wind", "Wind_Speed");
                rowObject[count] = renameKey(rowObject[count], "Wind_1", "Wind_Dir");
                rowObject[count] = renameKey(rowObject[count], "Wind_2", "Wind_Run");
                rowObject[count] = renameKey(rowObject[count], "Hi_1", "Hi_Speed");
                rowObject[count] = renameKey(rowObject[count], "Hi_2", "Hi_Dir");
                rowObject[count] = renameKey(rowObject[count], "Wind_3", "Wind_Chill");
                rowObject[count] = renameKey(rowObject[count], "Heat", "Heat_Index");
                rowObject[count] = renameKey(rowObject[count], "THW", "THW_Index");
                rowObject[count] = renameKey(rowObject[count], "THSW", "THSW_Index");
                rowObject[count] = renameKey(rowObject[count], "__EMPTY_2", "Bar");
                rowObject[count] = renameKey(rowObject[count], "__EMPTY_3", "Rain");
                rowObject[count] = renameKey(rowObject[count], "Rain", "Rain_Rate");
                rowObject[count] = renameKey(rowObject[count], "Solar", "Solar_Rad.");
                rowObject[count] = renameKey(rowObject[count], "Solar_1", "Solar_Energy");
                rowObject[count] = renameKey(rowObject[count], "Hi Solar", "Hi_Solar_Rad.");
                rowObject[count] = renameKey(rowObject[count], "UV ", "UV_Index");
                rowObject[count] = renameKey(rowObject[count], "UV _1", "UV_Dose");
                rowObject[count] = renameKey(rowObject[count], "Hi ", "Hi_UV");
                rowObject[count] = renameKey(rowObject[count], "Heat_1", "Heat_D-D");
                rowObject[count] = renameKey(rowObject[count], "Cool", "Cool_D-D");
                rowObject[count] = renameKey(rowObject[count], "In ", "In_Temp");
                rowObject[count] = renameKey(rowObject[count], "In", "In_Hum");
                rowObject[count] = renameKey(rowObject[count], "In _1", "In_Dew");
                rowObject[count] = renameKey(rowObject[count], "In _2", "In_Heat");
                rowObject[count] = renameKey(rowObject[count], "In _3", "In_EMC");
                rowObject[count] = renameKey(rowObject[count], "In Air", "In_Air_Density");
                rowObject[count] = renameKey(rowObject[count], "__EMPTY_4", "ET");
                rowObject[count] = renameKey(rowObject[count], "Wind_4", "Wind_Samp");
                rowObject[count] = renameKey(rowObject[count], "Wind_5", "Wind_Tx");
                rowObject[count] = renameKey(rowObject[count], "ISS ", "ISS_Recept");
                rowObject[count] = renameKey(rowObject[count], "Arc.", "Arc._Int.");
                count++;
              }
              document.getElementById("jsondata").innerHTML = JSON.stringify(rowObject,undefined,4) //stringify to display on website
              console.log("Date: " + rowObject[1].Date);
              console.log("Time: " + rowObject[1].Time);
         });
        }
    }
});

const renameKey = (object, key, newKey) => {
    const clonedObj = clone(object);
    const targetKey = clonedObj[key];

    delete clonedObj[key];
    clonedObj[newKey] = targetKey;
    return clonedObj;
}

const clone = (obj) => Object.assign({}, obj);
