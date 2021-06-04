let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

let months = ["Enero", "Feb", "Mar", "Abr", "Mayo", "Jun", "Jul", "Agosto", "Sept", "Oct", "Nov", "Dic"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);


function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let cell = document.createElement("td");
                cell.classList.add("hover");
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-primary");
                } // color today's date
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row); // appending each row into calendar body.
    }
    hoverableCells();
}


//enable Calendar cells to be clickable
function hoverableCells() {
    document.querySelectorAll('.hover').forEach(item => {
        item.addEventListener('click', () => {
            document.getElementById("timeButtons").innerHTML=""; // kill previous buttons
            document.getElementById("displayTableBody").innerHTML=""; // kill table rows
            //remove any bg-primary cells
            document.querySelectorAll('.hover').forEach(hoverable => {
                hoverable.classList.remove('bg-primary');
            });
    
            //set clicked cell to bg-primary
            item.classList.add('bg-primary');
            //run function to show reports
            displayReports(item.innerHTML);
        });
    });
}

//Display report based on clicked date
function displayReports(displayDay) {
    let displayYear = selectYear.value;
    let displayMonth = parseInt(selectMonth.value) + 1;

    if(displayMonth < 10){
        displayMonth = ("0" + displayMonth);
    }
    if(displayDay < 10){
        displayDay = ("0" + displayDay);
    }
    let displayDate = (displayYear + "-" + displayMonth + "-" + displayDay);
    let URL = "http://localhost:3004/weather/"+displayYear+"/"+displayMonth+"/"+displayDay;
    let buttonDiv = document.getElementById("timeButtons");
    $.get(URL, function(data){
        let table = document.getElementById("reportWholeTable");
        if(data.length==0){
            // hide table
            table.style.display = 'none';
            buttonDiv.innerHTML = "No hay informes meteorológicos disponibles hoy";
            document.getElementById("displayTableAnnouncement").innerHTML = '';
        } else{
            table.style.display = '';
            data.forEach(element => {
                let button = document.createElement("button");
                let textnode = document.createTextNode(element.time);
                button.id=element.id;
                button.classList.add("btn");
                button.classList.add("btn-outline-primary");
                button.addEventListener("click", displayByTime);
                button.appendChild(textnode);
                buttonDiv.appendChild(button);
            });
        }
        
      });
}

function hideTable(){
    let table = document.getElementById("reportWholeTable");
    table.style.display = 'none';
}

function addRowContent(tableBody, s1, s2){
    let row = document.createElement("tr");
    let th = document.createElement("th");
    th.setAttribute("scope", "row");
    let td = document.createElement("td");
    let node1 = document.createTextNode(s1);
    let node2 = document.createTextNode(s2);
    th.appendChild(node1);
    td.appendChild(node2);
    row.appendChild(th);
    row.appendChild(td);
    tableBody.appendChild(row);
}

//Display Report Time options for date clicked - requires query database
function displayByTime(){
    let URL = "http://localhost:3004/weather/"+this.id;
    $.get(URL, function(data){
        let tableBody = document.getElementById("displayTableBody");
        tableBody.innerHTML=""; // clear to start
        let weatherInfo = JSON.parse(data[0].weatherinfo);
        let date = data[0].date;
        addRowContent(tableBody, "Fecha", date.substring(0, date.length-14));
        addRowContent(tableBody, "Hora", data[0].time);
        for(const property in weatherInfo){
            addRowContent(tableBody, property, weatherInfo[property]);
        }
        let announcementString = "<strong>Anuncio:</strong> "+data[0].announcement;
        document.getElementById("displayTableAnnouncement").innerHTML=announcementString;
    });
}